import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import './assets/css/layout.css';
import './assets/css/main.css';

import MainLayout from './layouts/MainLayout.js';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={MainLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
