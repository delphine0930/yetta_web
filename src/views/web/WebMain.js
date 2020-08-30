import React, { Component } from 'react';

import ReactTooltip from 'react-tooltip';

class WebMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            searchString: ""
        };
    }

    componentDidMount() {
        this.search();
    }

    fetchBlog = () => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        let url = '/api/blogs';
        
        // search tag 가 있으면 tag 넣어서 검색
        if(this.state.searchString !== undefined && this.state.searchString !== "") {
            url = `${url}/?search=${this.state.searchString}`;
        } 
    
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: headers
            })
                .then((response) => {
                    if(response.ok) {
                        resolve(response.json());
                        return;
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        });

    }

    search = () => {
        this.fetchBlog()
            .then(res => {
                this.setState({
                    blogs: res
                })
            });
    }

    // 엔터키로 검색
    handleKeyPress = (event) => {
        if (event.key === 'Enter' && this.state.searchString.length > 0) {
            event.preventDefault();
            this.search();
        }
    }

    render() {      
        var rows = [];

        this.state.blogs.forEach((blog) => {
            var diffRanking = blog.yesterdayRanking - blog.ranking;
            var tags = [];
            var tagCount = 0;
            blog.tags.forEach((tag) => {
                tags.push(<button type="button" key={tagCount++}>#{tag}</button>);
            });

            rows.push(
                <tr key={blog.ranking}>
                    <td className="rank_num">
                        <span className="c_rank">{blog.ranking}</span>
                        <span className={diffRanking === 0 ? "rank rank_stay" : diffRanking > 0 ? "rank rank_up" : "rank rank_down"}>
                            <i></i>{diffRanking === 0 ? "-" : Math.abs(diffRanking)}
                        </span>
                    </td>
                    <td>
                        <a className="b_tit" href={blog.url} target="_blank" rel="noopener noreferrer" data-tip={blog.comment}>
                            {blog.newContent ? <i className="new">New</i> : null }{blog.name}
                        </a>
                        <ReactTooltip/>
                    </td>
                    <td className="t_right">{(blog.subscriber/1000).toFixed(2)} k</td>
                    <td className="t_right">{blog.totalContent.toLocaleString()}</td>
                    <td className="t_right">{blog.monthlyAvgContent.toLocaleString()}</td>
                    <td className="tag">
                        {tags}
                    </td>
                </tr>
            );
        });

        return(
            <div>
                <div id="header">
                    <div className="inner">
                        <h1 className="logo">
                            <a href="index.html">
                                <img src={"/assets/web/images/common/logo.png"} alt="예따" />
                            </a>
                        </h1>
                        <form className="search_form">
                            <input type="text" onKeyPress={(event) => { this.handleKeyPress(event) }}
                            onChange={(event) => {this.setState({searchString: event.target.value})}} 
                            placeholder="검색" value={this.state.searchString}/>
                            <button type="button" onClick={(event) => this.search(event)}>검색</button>
                        </form>
                    </div>
                </div>
                <div id="container">
                    <div className="main_top">
                        <div className="inner">
                            <div className="txt_box">
                                <strong>구독만 하면 매일 아침 배달되는 주식 정보</strong>
                                <p>국내 주식 투자 블로그를 평가하여<br/>상위 20개 블로그의 새 글을<br/>매일 아침 이메일로 보내 드립니다.</p>
                            </div>
                            <button type="button" onClick={() => this.props.history.push('/subscribe')}>구독하기</button>
                        </div>
                    </div>
                    <div className="inner">
                        <table className="table">
                            <colgroup>
                                <col style={{width: "125px"}} />
                                <col style={{width: "420px"}} />
                                <col style={{width: "195px"}} />
                                <col style={{width: "195px"}} />
                                <col style={{width: "195px"}} />
                                <col style={{width: "520px"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>등수</th>
                                    <th>블로그</th>
                                    <th>구독자</th>
                                    <th>전체 게시글</th>
                                    <th>월 평균 게시글</th>
                                    <th>태그</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default (WebMain);