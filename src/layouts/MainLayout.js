import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Main from '../views/Main.js';


function searchTag() {
    this.props.fetchBlog();
}

function changeTag(event) {
    
}

function MainLayout() {
    var imgPrefix = "/images/";

    return(
        <div>
            <div id="wrapper">
                <div id="header">
                    <div className="inner">
                        <h1 className="logo">
                            {/* <a href="index.html"> */}
                                <img src={imgPrefix + "common/logo.png"} alt="예따" />
                            {/* </a> */}
                        </h1>
                        <form className="search_form">
                            <input type="text" placeholder="태그를 입력하세요." />
                            <button type="button" onClick={event => this.searchTag()}>검색</button>
                        </form>
                    </div>
                </div>
                <div id="container">
                    <Main/>
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

export default connect(null, actions) (MainLayout);