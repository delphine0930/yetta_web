import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import mainRoutes from '../routes/mobileIndex';

import '../assets/mobile/css/layout.css';
import '../assets/mobile/css/main.css';


class MobileMainLayout extends Component {
    render() {
        return(
            <div>
                <div id="wrapper">
                    <Switch>        
                        {mainRoutes.map((route, key) => {
                            return (<Route exact path={route.path} component={route.component} key={key} />)
                            }
                        )} 
                        <Redirect to="/m/"/>
                    </Switch>
                </div> 
            </div>
        );
    }
}

export default (MobileMainLayout);