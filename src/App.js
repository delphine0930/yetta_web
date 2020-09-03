import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import './App.css';

import WebMainLayout from './layouts/WebMainLayout.js';
import MobileMainLayout from './layouts/MobileMainLayout.js';


function App() {
  var myHost = window.location.hostname;

  // mobile 로 서브도메인으로 접근 안했을 때에는 서브도메인으로 리다이렉트
  if(isMobile && myHost.split(".")[0] !== "m") {
    // 아예 다른 서브도메인을 갖고 온 경우
    if(myHost.split(".")[0] !== "yetta"){
      var newHost = myHost.replace(myHost.split(".")[0], ""); // 서브도메인 없애기
      window.location.hostname = "m" + newHost;
    }
    else {
      // 서브도메인 없이 들어왔으면 그냥 서브도메인을 붙여줌
      window.location.hostname = "m." + myHost;
    }
    
  }
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/m" component={MobileMainLayout} />
          <Route path="/" component={WebMainLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
