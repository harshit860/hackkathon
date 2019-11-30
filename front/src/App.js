import React from 'react';
import './App.css';
import Main from './component/Main'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import CreateAudi from './component/CreateAudi'
import Game from './component/game'
import Login from './component/login'
import Register from './component/Register'

function App() {
  return (
    <Router>
      <nav class="navbar navbar-dark bg-dark justify-content-around">
        <div className="App">
         <Link to="/" className="col-2" >Home</Link>
         <Link to="/audi" className="col-2">Add Place</Link>
         <Link to="/login" className="col-2">Login</Link>
         <Link to ="/Register" className="col-2">Register</Link>
        </div>
        </nav>
        <div>
      <Route path="/Register" exact component={Register}/>    
      <Route path="/login" exact component={Login} />    
      <Route path="/" exact component={Main} />
      <Route path="/audi" exact component={CreateAudi} />
      <Route path="/games" exact component={Game} />
        </div>
    </Router>
    
  );
}

export default App;
