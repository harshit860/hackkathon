import React from 'react';
import axios from 'axios';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            result:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=(e)=>{
        e.preventDefault()
        let userData ={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://127.0.0.1:5000/login',userData)
        .then(res=>{
            
            this.props.set(res.data.name)
            this.setState({
                result:res.data
            })
        })
        this.setState({
            email:'',
            password:''
        })
    }
    render(){
        console.log(this.props)
        return(
           <div className="m-5"> 
            <form className="col-4 border border-primary">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label> 
                    <input type="password" class="form-control" name="password" value={this.state.password} id="exampleInputPassword1" onChange={this.handleChange}/>
                </div>
                {/* <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" name="password" value={this.state.password} onChange={this.handleChange} id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary" onClick={this.handleClick}>Login</button>
            </form>
              <h3>{this.state.result.status}</h3>
              </div>
        )
    }
}
export default Login;