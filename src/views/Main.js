import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            searchTag: ""
        };
    }

    componentDidMount() {
        this.fetchBlog()
            .then(res => {
                this.setState({
                    blogs: res
                })
            });
        
    }

    fetchBlog = () => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        let url = 'api/blogs';

        // search tag 가 있으면 tag 넣어서 검색
        if(this.state.searchTag !== null && this.state.searchTag !== "") {
            url = `${url}/?searchTag=${this.state.searchTag}`;
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
                        <a className="b_tit" href={blog.url} target="_blank" rel="noopener noreferrer">
                            {blog.newContent ? <i className="new">New</i> : null }{blog.name}
                        </a>
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
                <div className="main_top">
                    <div className="inner">
                        <div className="txt_box">
                            <strong>구독만 하면 매일 아침 배달되는 주식 정보</strong>
                            <p>국내 주식 투자 블로그를 평가하여<br/>상위 20개 블로그의 새 글을<br/>매일 아침 이메일로 보내 드립니다.</p>
                        </div>
                        <button type="button">구독하기</button>
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
        );
    }
}

function mapStateProps(state) {
    return {
        blogs: state.blogs 
    };
}

export default connect(mapStateProps) (Main);