import React, {Component} from 'react';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>

        </div>
      </Router>
    );
  }
}

export default App;
