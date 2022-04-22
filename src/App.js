import React from 'react';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'



const App = () => {
  return (
    <Router>
    <Home/>
    </Router>
  );
}

export default App;
