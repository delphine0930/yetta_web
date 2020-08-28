import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from "react-router-dom";
import * as actions from '../actions';

import mainRoutes from '../routes/index';

class MainLayout extends Component {
    render() {
        return(
            <div>
                <div id="wrapper">
                    <div>
                        <Switch>        
                            {mainRoutes.map((route, key) => {
                                return (<Route exact path={route.path} component={route.component} key={key} />)
                                }
                            )} 
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                    <div id="footer">
                        <div className="inner">
                            <strong>서비스문의 <span>manager@yetta.kr</span></strong>
                            <p className="copy">© Copyright 2020 -2021 예따</p>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default connect(null, actions) (MainLayout);