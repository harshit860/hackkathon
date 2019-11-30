import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import CreateAudi from './component/CreateAudi'
import Game from './component/game'
import Axios from 'axios'

function App() {
  return (
    <Router>
        <div className="App">
         <Link to="/" >Home</Link>
         <Link to="/audi">Add Place</Link>
        </div>
        <div>
      <Route path="/" exact component={Main} />
      <Route path="/audi" exact component={CreateAudi} />
      <Route path="/games" exact component={Game} />
        </div>
    </Router>
    
  );
}

export default App;
