import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import CreateAudi from './component/CreateAudi'

function App() {
  return (
    <Router>
        <div className="App">
         <Link to="/" ></Link>
         <Link to="/audi">Add Place</Link>
        </div>
        <div>
      <Route path="/" exact component={Main} />
      <Route path="/audi" exact component={CreateAudi} />
        </div>
    </Router>
    
  );
}

export default App;
