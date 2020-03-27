import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
