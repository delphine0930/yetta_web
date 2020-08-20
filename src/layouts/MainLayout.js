import React from 'react';


function MainLayout() {
    var imgPrefix = "/images/";

    return(
        <div>
            <div id="wrapper">
                <div id="header">
                    <div class="inner">
                        <h1 class="logo">
                            {/* <a href="index.html"> */}
                                <img src={imgPrefix + "common/logo.png"} alt="예따" />
                            {/* </a> */}
                        </h1>
                        <form class="search_form">
                            <input type="text" placeholder="태그를 입력하세요." />
                            <button type="button">검색</button>
                        </form>
                    </div>
                </div>
                <div id="container">
                    <div class="main_top">
                        <div class="inner">
                            <div class="txt_box">
                                <strong>구독만 하면 매일 아침 배달되는 주식 정보</strong>
                                <p>국내 주식 투자 블로그를 평가하여<br/>상위 20개 블로그의 새 글을<br/>매일 아침 이메일로 보내 드립니다.</p>
                            </div>
                            <button type="button">구독하기</button>
                        </div>
                    </div>
                    <div class="inner">
                        <table class="table">
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
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">1</span>
                                        <span class="rank rank_up"><i></i>3</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>일본주식연구소</a>
                                    </td>
                                    <td class="t_right">2만</td>
                                    <td class="t_right">402</td>
                                    <td class="t_right">21</td>
                                    <td class="tag">
                                        <button type="button">#일본</button>
                                        <button type="button">#키엔스</button>
                                        <button type="button">#해외주식</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">2</span>
                                        <span class="rank rank_down"><i></i>1</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>우주에서 날아온 일억개의 별</a>
                                    </td>
                                    <td class="t_right">21만</td>
                                    <td class="t_right">31</td>
                                    <td class="t_right">7</td>
                                    <td class="tag">
                                        <button type="button">#국내투자</button>
                                        <button type="button">#가치투자</button>
                                        <button type="button">#해외주식</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">3</span>
                                        <span class="rank rank_up"><i></i>3</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>피터케이 블로그</a>
                                    </td>
                                    <td class="t_right">42만</td>
                                    <td class="t_right">604</td>
                                    <td class="t_right">14</td>
                                    <td class="tag">
                                        <button type="button">#시황</button>
                                        <button type="button">#국내주식</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">4</span>
                                        <span class="rank rank_down"><i></i>1</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>Anthony J의 주식이야기</a>
                                    </td>
                                    <td class="t_right">1,07만</td>
                                    <td class="t_right">117</td>
                                    <td class="t_right">5</td>
                                    <td class="tag">
                                        <button type="button">#가치투자</button>
                                        <button type="button">#공모주</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">5</span>
                                        <span class="rank rank_up"><i></i>3</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>잃지 않는 투자를 추구합니다</a>
                                    </td>
                                    <td class="t_right">0,32만</td>
                                    <td class="t_right">203</td>
                                    <td class="t_right">8</td>
                                    <td class="tag">
                                        <button type="button">#산업분석</button>
                                        <button type="button">#반도체</button>
                                        <button type="button">#종목</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">6</span>
                                        <span class="rank rank_down"><i></i>1</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>초대현농업의 블로그</a>
                                    </td>
                                    <td class="t_right">2,1만</td>
                                    <td class="t_right">333</td>
                                    <td class="t_right">3</td>
                                    <td class="tag">
                                        <button type="button">#투자철학</button>
                                        <button type="button">#종목분석</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">7</span>
                                        <span class="rank rank_up"><i></i>3</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>와이민의 블로그</a>
                                    </td>
                                    <td class="t_right">5,01만</td>
                                    <td class="t_right">785</td>
                                    <td class="t_right">11</td>
                                    <td class="tag">
                                        <button type="button">#거시</button>
                                        <button type="button">#시황</button>
                                        <button type="button">#투자철학</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">8</span>
                                        <span class="rank rank_down"><i></i>1</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>베가스 풍류객의 미국주식</a>
                                    </td>
                                    <td class="t_right">4,3만</td>
                                    <td class="t_right">664</td>
                                    <td class="t_right">41</td>
                                    <td class="tag">
                                        <button type="button">#시황</button>
                                        <button type="button">#해외주식</button>
                                        <button type="button">#미국</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">9</span>
                                        <span class="rank rank_up"><i></i>3</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>IPO 연구원</a>
                                    </td>
                                    <td class="t_right">0,7만</td>
                                    <td class="t_right">899</td>
                                    <td class="t_right">6</td>
                                    <td class="tag">
                                        <button type="button">#공모주</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="rank_num">
                                        <span class="c_rank">10</span>
                                        <span class="rank rank_down"><i></i>1</span>
                                    </td>
                                    <td>
                                        <a class="b_tit" href="#" target="_blank"><i class="new">New</i>Global AssetTrendReader</a>
                                    </td>
                                    <td class="t_right">0,85만</td>
                                    <td class="t_right">1,054</td>
                                    <td class="t_right">15</td>
                                    <td class="tag">
                                        <button type="button">#시황</button>
                                        <button type="button">#해외주식</button>
                                        <button type="button">#원자재</button>
                                        <button type="button">#ETF</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="footer">
                    <div class="inner">
                        <strong>서비스문의 <span>manager@yetta.kr</span></strong>
                        <p class="copy">© Copyright 2020 -2021 예따</p>
                    </div>
                </div>
            </div> 
        </div>
    );
    
}

export default MainLayout;