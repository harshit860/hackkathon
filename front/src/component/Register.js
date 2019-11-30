import React from 'react'
import axios from 'axios'

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:"",
            result :''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=(e)=>{
        e.preventDefault()
        let details ={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://127.0.0.1:5000/register',details)
        .then(res=>{
            this.setState({
                result:res.data
            })
        })
        this.setState({
            name:'',
            email:'',
            password:''
        })
    }
    render(){
        return(
            <form className="col-4 border border-primary">
            <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleChange}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label> 
                <input type="password" class="form-control" name="password" value={this.state.password} id="exampleInputPassword1" onChange={this.handleChange}/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={this.handleClick}>Register</button>
        </form>
        )
    }
} 
export default Register;