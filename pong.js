const canvas  = document.getElementById("pong")
const context = canvas.getContext("2d")

context.fillStyle = "black";
context.fillReact(100,200,50,75)


context.fillStyle = "red"
context.beginPath();
context.aec(300,350,100,0,Math.pi*2,false)
context.closePath();

function drawRect(x,y,w,h,color)
{
    ctx.fillStyle = color
    ctx.fillReact(x,y,w,h)
}
function drawCircle(){
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}
function  drawText(text,x,y){
    ctx.fillStyle = color;
    ctx.font = "75px fantasy";
    ctx.fillText(text,x,y)

}
let rectx = 0
function render(){
    drawRect(0,0,600,400,"black");
    drawRect(rectx,100,100,100,"red");
    rectx = rectx + 100
}

setInterval(render,1000)

const user = {
    x:canvas.width-10,
    y:canvas.height/2 - 50,
    width:10,
    height:100,
    color:"white",
    score:0

}
const com = {
    x:canvas.width-10,
    y:canvas.height/2 - 50,
    width:10,
    height:100,
    color:"white",
    score:0
}
drawRect(user.x,user.y,user.width,user.height,user.color)