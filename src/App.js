import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import './App.css';

import MainLayout from './layouts/MainLayout.js';


function App() {
  // mobile 로 들어오면 서브도메인으로 이동
  if(isMobile && window.location.host.split(".")[0] !== "m") {
    window.location.host = "m.yetta.kr";
  }

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
