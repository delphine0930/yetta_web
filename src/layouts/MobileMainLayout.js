import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import mainRoutes from '../routes/mobileIndex';

class MobileMainLayout extends Component {
    render() {
        return(
            <div>
                <meta name="viewport" content="width=640, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi" />
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