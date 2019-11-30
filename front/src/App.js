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
            flag:false
      }
    }
    setname(username){
      this.setState({
            name:username
    //   })
    })
  }
  logout(){
    this.setState({
      name:null
    })
  }
    render(){
      console.log(this.state)
  return (
    <Router>
      <nav class="navbar navbar-dark bg-dark ">
        <div className="App row justify-content-around">
         <Link to="/" className="col-xl-2" >Home</Link>
         <Link to="/audi" className="col-xl-4">Add Place</Link>
         <Link to="/login" className="col-xl-2">Login</Link>
         <Link to ="/Register" className="col-xl-2">Register</Link>
         <Link className="text-white col-xl-1">{this.state.name}</Link>
         
         {this.state.flag ?( <button className="btn text-danger col-xl-2" onClick={()=>this.logout()}>Logout</button>):('')}
        
        </div>
        </nav>
        <Can/>
        <div style={{marginTop:"-600px"}}>
        
      <Route path="/Register" exact component={Register}/>    
      <Route path="/login" exact render={()=><Login  set={(val)=>this.setname(val)}/>} />    
      <Route path="/" exact component={Main} />
      <Route path="/audi" exact component={CreateAudi} />
      <Route path="/games/:id" exact component={Game} />
      
        </div>
    </Router>
    
  );
}
}
export default App;
