import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
