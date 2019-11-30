from flask import Flask,request,jsonify,make_response
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
import csv
import json
import hashlib
import uuid
import os

def read_file():
    global users
    users = list()
    
    with open("register.csv") as readfile:
        reader = csv.DictReader(readfile)
        for i in reader:
            users.append(i)
    
    global games
    games = list()
    with open("audi.csv") as readfile:
        reader = csv.DictReader(readfile)
        for i in reader:
            games.append(i)

    global games_2
    games_2 = list()
    with open("game.csv") as readfile2:
        reader2 = csv.DictReader(readfile2)
        for i in reader2:
            games_2.append(i)

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    return salt.hex()

@app.route("/list")
def show():
    read_file()
    return json.dumps({"list":games})

@app.route("/create",methods = ["POST"])
def gamesplace():
    try:
        with open('audi.csv') as readfile:
            fieldnames = ['id','audiname','img','location']
    except FileNotFoundError:
        with open("audi.csv",'w') as writefile:
            fieldnames = ['id','audiname','img','location']
            writer = csv.DictWriter(writefile,fieldnames = fieldnames)
            writer.writeheader()
    with open("audi.csv","a") as writefile:
        writer = csv.DictWriter(writefile,fieldnames = fieldnames)
        if not writer.fieldnames == fieldnames:
            writer.writeheader()
        id = str(uuid.uuid4())
        audiname = request.json["audiname"]
        img = request.json['img']
        location = request.json['location']
        writer.writerow({"id":id,"audiname":audiname,'img':img,'location':location})
    return "success"


@app.route("/gameadd",methods = ["POST"])
def games1():
    read_file()
    id = request.json['id']
    audiname = request.json['audiname']
    game = request.json['game']
    game_id = str(uuid.uuid4())
    try:
        with open('game.csv') as readfile:
            fieldnames = ['id','game_id','audiname','game','count']
    except IOError:
        with open("game.csv",'w') as writefile:
            fieldnames = ['id','game_id','audiname','game','count']
            writer = csv.DictWriter(writefile,fieldnames = fieldnames)
            writer.writeheader()
    with open("game.csv","a") as writefile:
        writer = csv.DictWriter(writefile,fieldnames = fieldnames)
        if not writer.fieldnames == fieldnames:
            writer.writeheader()
        print(games)
        for i in games:
            if i["audiname"] == audiname:
                writer.writerow({"id":i["id"],"audiname":i["audiname"],"game_id":game_id,"game":game,"count":1})
    return "game inserted"

@app.route("/register",methods =["post"])
def register():
    read_file()
    try:
        with open("register.csv") as readfile:
            fieldnames = ['id','name','email','salt','password_hash']
    except FileNotFoundError:
        with open("register.csv","w") as writefile:
            fieldnames = ['id','name','email','salt','password_hash']
            writer = csv.DictWriter(writefile,fieldnames=fieldnames)
            writer.writeheader()
    with open("register.csv","a") as writefile:
        writer = csv.DictWriter(writefile,fieldnames=fieldnames)
        if not writer.fieldnames == fieldnames:
            writer.writeheader()
        id = str(uuid.uuid4())  
        name = request.json['name']
        email = request.json['email']
        for i in users:
            if i["email"] != email:
                email1 = email
            else:
                return "email present"
        password = request.json['password']
        password_hash = md5_hash(password)
        # for i in range(50):
        #     salt = generate_salt()
        writer.writerow({"id":id,"name":name,"email":email1,"password_hash":str(password_hash),"salt":1})
    return "success"

@app.route("/login",methods =["post"])
def login():
    read_file()
    print(users)
    email = request.json['email']
    password = request.json['password']
    password_hash = md5_hash(password)
    response = make_response()
    for i in users:
        if i['email'] == email:
            if i["password_hash"] == password_hash:         
                response.set_cookie(i["id"])
                return i["id"]
        else:
            print("wrong")

@app.route("/gamecount",methods = ["POST"])
def gamescount():
    read_file()
    gam  = request.json['game']
    # print(games_2)
    ar1 = list()
    for i in games_2:
        if i["game"] == gam:
            num3 = int(i["count"])
            cnt = num3 + 1
            ar1.append({"id":i["id"],"audiname":i["audiname"],"game_id":i["game_id"],"game":i["game"],"count":cnt})
        else:
            ar1.append(i)
    # print(ar1)
    with open("game.csv","a") as writefile:
        writer = csv.DictWriter(writefile)
        for i in ar1:
            print(i)
            writer.writerow(i)
    return "done"