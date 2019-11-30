import React from 'react';
import './App.css';
import Main from './component/Main'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import CreateAudi from './component/CreateAudi'
import Game from './component/game'
import Login from './component/login'
import Register from './component/Register'
import Can from './component/canvas/can'
class App extends  React.Component{
    constructor(props){
      super(props)
      this.state={
            name:'',
            flag:false,
            img1:''
      }
    }
    setname(username){
      this.setState({
            name:username,
            flag:true,
    //   })
    })
  }
  setimage(value){
    this.setState({
      img1:value
    })
  }
  logout(){
    this.setState({
      name:null,
      flag:false
    })
  }
componentDidMount() {

    console.log(navigator)

}

    render(){
      console.log(this.state)
  return (
    <Router>
      <nav class="navbar navbar-dark bg-dark ">
        <div className="App row justify-content-around  col-xl-12">
         <Link to="/" className="col-xl-2" >Home</Link>
         <Link to="/audi" className="col-xl-4">Add Place</Link>
         <Link to="/login" className="col-xl-2">Login</Link>
         <Link to ="/Register" className="col-xl-2">Register</Link>
         <Link className="text-white col-xl-1">{this.state.name}</Link>
<<<<<<< HEAD
         <img className=" rounded-circle" height="80px" width="80px" src={this.state.img1} ></img>
         {this.state.flag ?( <button className="btn text-danger col-xl-1" onClick={()=>this.logout()}>Logout</button>):('')}
=======
         
         {this.state.flag ?( <button className="btn text-danger col-xl-2" onClick={()=>this.logout()}>Logout</button>):('')}
>>>>>>> 5716b94249c43b4333d11408ff0fe152a14a3283
        
        </div>
        </nav>
        <Can/>
        <div style={{marginTop:"-600px"}}>
        
      <Route path="/Register" exact component={Register}/>    
      <Route path="/login" exact render={()=><Login  imgg={(val)=>this.setimage(val)} set={(val)=>this.setname(val)}/>} />    
      <Route path="/" exact component={Main} />
      <Route path="/audi" exact component={CreateAudi} />
      <Route path="/games/:id" exact component={Game} />
      
        </div>
    </Router>
    
  );
}
}
export default App;
