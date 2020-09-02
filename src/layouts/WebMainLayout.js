import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import mainRoutes from '../routes/webIndex';

import '../assets/web/css/layout.css';
import '../assets/web/css/main.css';

class WebMainLayout extends Component {
    render() {
        return(
            <div>
                <div id="wrapper">
                    <Switch>        
                        {mainRoutes.map((route, key) => {
                            return (<Route exact path={route.path} component={route.component} key={key} />)
                            }
                        )} 
                        <Redirect to="/"/>
                    </Switch>
                </div> 
            </div>
        );
    }
}

export default (WebMainLayout);