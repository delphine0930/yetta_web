import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import MainLayout from './layouts/MainLayout.js';


function App() {
  return (
    <div>
      {window.location.host.split(".")[0] !== "m" ? 
      <div>
        <link rel="stylesheet" type="text/css" href={"../assets/web/css/main.css"} />
        <link rel="stylesheet" type="text/css" href={"../assets/web/css/layout.css"} /> 
      </div> :
      <div>
        <link rel="stylesheet" type="text/css" href={"../assets/mobile/css/main.css"} />
        <link rel="stylesheet" type="text/css" href={"../assets/mobile/css/layout.css"} /> 
      </div> }
      <Router>
        <Switch>
          <Route path="/" component={MainLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
