import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
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
