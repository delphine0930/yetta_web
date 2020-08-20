import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './assets/css/layout.css';
import './assets/css/main.css';

import MainLayout from './layouts/MainLayout.js';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={MainLayout} />
        </Switch>

        {/* <div id={'loadingOverlay'} className={isLoading ? 'active' : ''} /> */}
      </Router>
  );
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
