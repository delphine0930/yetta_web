import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import mainRoutes from '../routes/webIndex';

class WebMainLayout extends Component {
    render() {
        return(
            <div>
                {/* <link rel="stylesheet" type="text/css" href={"../assets/web/css/main.css"} />
                <link rel="stylesheet" type="text/css" href={"../assets/web/css/layout.css"} />  */}
                <Switch>        
                    {mainRoutes.map((route, key) => {
                        return (<Route exact path={route.path} component={route.component} key={key} />)
                        }
                    )} 
                    <Redirect to="/"/>
                </Switch>
            </div>
        );
    }
}

export default (WebMainLayout);