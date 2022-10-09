import React from 'react'
import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Stocks from './pages/Stock';
import "./index.css";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route
  path="/stocks"
  render={(routerProps) => <Stocks {...routerProps} />}
>
        <Stocks />
  </Route>
  <Route path="/Dashboard">
      <Dashboard />
    </Route>
  </Switch>
    </div>
  );
}

export default App;