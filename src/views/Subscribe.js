import React, { Component } from 'react';
import $ from 'jquery';
import Swal from 'sweetalert2';

class Subscribe extends Component {

    componentDidMount() {
        $.getScript("https://s3.ap-northeast-2.amazonaws.com/resource.stibee.com/subscribe/stb_subscribe_form.js");
        
    }

    catchResult = () => {
        setTimeout(() => {
            // 성공시 세팅되는 success 를 catch 해서 swal 띄워줌
            var formResult = document.getElementById("stb_form_result").className;

            if(formResult.includes("success")){
                Swal.fire({
                    title: '구독 신청 완료',
                    text: '구독해 주셔서 감사합니다.',
                    icon: 'success',
                    onAfterClose: () => this.props.history.goBack()
                })
            }
        }, 500);
    }

    render() {      
        return(
            <div>
                <link rel="stylesheet" href="https://s3.ap-northeast-2.amazonaws.com/resource.stibee.com/subscribe/stb_subscribe_form_style.css" />
                <div id="stb_subscribe">
                    <form action="https://stibee.com/api/v1.0/lists/o8vhloNlBP1IbgTczAyxbuLclCKi/public/subscribers" method="POST" target="_blank" acceptCharset="utf-8" className="stb_form" name="stb_subscribe_form" id="stb_subscribe_form" noValidate="">
                        <h1 className="stb_form_title">예따 뉴스레터 구독하기</h1>
                        <fieldset className="stb_form_set">
                            <label htmlFor="stb_email" className="stb_form_set_label">이메일 주소</label>
                            <input type="email" className="stb_form_set_input" id="stb_email" name="email"/>
                            <div className="stb_form_msg_error" id="stb_email_error"></div>
                        </fieldset>
                        {/* <fieldset className="stb_form_set">
                            <label htmlFor="stb_university" className="stb_form_set_label">출신 대학</label>
                            <input type="text" className="stb_form_set_input" id="stb_university" name="university"/>
                            <div className="stb_form_msg_error" id="stb_university_error"></div>
                        </fieldset> */}
                        <div className="stb_form_policy">
                            <label>
                                <input type="checkbox" id="stb_policy" value="stb_policy_true" />
                                <button id="stb_form_modal_open" type="button" >개인정보 수집 및 이용</button>에 동의합니다.
                            </label>
                            <div className="stb_form_msg_error" id="stb_policy_error"></div>
                            <div className="stb_form_modal stb_form_policy_text blind" id="stb_form_modal">
                                <div className="stb_form_modal_body">
                                    <h1 className="stb_form_modal_title">개인정보 수집 및 이용</h1>
                                    <p className="stb_form_modal_text">
                                        뉴스레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다.
                                        수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 파기됩니다.
                                    </p>
                                    <div className="stb_form_modal_btn">
                                        <button id="stb_form_modal_close" type="button">닫기</button>
                                    </div>
                                </div>
                            <div className="stb_form_modal_bg" id="stb_form_modal_bg"></div>
                        </div>
                    </div>
                    <div className="stb_form_result" id="stb_form_result"></div>
                    <fieldset className="stb_form_set_submit">
                        <button type="submit" className="stb_form_submit_button" id="stb_form_submit_button" onClick={() => this.catchResult()}
                         style={{backgroundColor: "rgb(62, 129, 246)", color: "rgb(255, 255, 255)"}}>구독하기</button>
                    </fieldset>
                </form>
                
            </div>
        </div>
        );
    }
}

export default Subscribe;