var STBSUBFORM = {
    init: function () {
        var errorMsgs = document.getElementsByClassName('stb_form_msg_error');
        errorMsgs = [].slice.call(errorMsgs);
        for (var index = 0; index < errorMsgs.length; index++) {
            errorMsgs[index].style.display = 'none';
        }
        var resultDom = document.getElementById('stb_form_result');
        resultDom.style.display = 'none';
        resultDom.className = resultDom.className.replace('success', '');
        resultDom.className = resultDom.className.replace('fail', '');
    },
    formRequest: function (e) {
        e.preventDefault();
        STBSUBFORM.init();

        var value = STBSUBFORM.getValue();
        if (STBSUBFORM.validate(value)) {
            var value = STBSUBFORM.serializeValue(value);
            value = value.replace('&policy=stb_policy_true', '');
            var endpoint = STBSUBFORM.form.action;
            STBSUBFORM.xhrRequest(endpoint, value);
        }
    },
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validatePhoneNumber: function (event) {
        if (event.keyCode === 8) {
            return;
        }
        if (event.keyCode === 189) {
            event.preventDefault();
        }
        if (event.target.value.length >= 13) {
            event.preventDefault();
        }
        var n = event.target.value.replace(/[^0-9-]/gi, '');
        event.target.value = n;

        var t = event.target.value.split('');

        var startDigit = event.target.value.startsWith('02') ? 2 : 3;
        var endDigit = event.target.value.startsWith('02') ? 6 : 8;

        if (event.target.value.length === 3) {
            t.splice(startDigit, 0, '-');
            event.target.value = t.join('');
        }

        if (event.target.value.length === 8) {
            t.splice(endDigit, 0, '-');
            event.target.value = t.join('');
        }

        if (event.target.value.length === 12) {
            event.target.value = event.target.value.replace(/-/gi, '');
            var t = event.target.value.split('');
            t.splice(startDigit, 0, '-');
            t.splice(7, 0, '-');
            event.target.value = t.join('');
        }

        if (event.target.value.length === 13) {
            event.target.value = event.target.value.replace(/-/gi, '');
            var t = event.target.value.split('');
            t.splice(startDigit, 0, '-');
            t.splice(8, 0, '-');
            event.target.value = t.join('');
        }
    },
    validate: function (values) {
        for (var index = 0; index < values.length; index++) {
            var item = values[index];
            if (item.id === 'stb_email' && item.value.length === 0) {
                STBSUBFORM.showError(item.id, '�대찓�� 二쇱냼瑜� �낅젰�섏꽭��.');
                return false;
            }
            if (item.id === 'stb_email' && !STBSUBFORM.validateEmail(item.value)) {
                STBSUBFORM.showError(item.id, '�섎せ�� �대찓�� 二쇱냼�낅땲��.');
                return false;
            }
            if (item.id === 'stb_policy' && !item.checked) {
                STBSUBFORM.showError(item.id, '媛쒖씤�뺣낫 �섏쭛 諛� �댁슜�� �숈쓽�� 二쇱꽭��.');
                return false;
            }
            if (item.id === 'stb_$is_sms_agreed' && !item.checked) {
                STBSUBFORM.showError(item.id, '臾몄옄 硫붿떆吏� �섏떊�� �숈쓽�� 二쇱꽭��.');
                return false;
            }
            if (item.id === 'stb_$phone' && (item.value.length > 13 && item.value.length !== 0)) {
                STBSUBFORM.showError(item.id, '�섎せ�� �꾪솕踰덊샇�낅땲��.');
                return false;
            }
        }
        return true;
    },
    showError: function (itemId, msg) {
        var domName = itemId + '_error';
        var dom = document.getElementById(domName);
        dom.innerText = msg;
        dom.style.display = 'block';
    },
    xhrRequest: function (endpoint, value) {
        if (window.XDomainRequest) {
            var xdr = new XDomainRequest();
            xdr.open("POST", endpoint);
            xdr.onload = function () {
                if (xdr.responseText.indexOf('@ERROR_MSG') !== -1) {
                    STBSUBFORM.showResult(xdr.responseText, 'fail');
                } else {
                    STBSUBFORM.showResult(xdr.responseText, 'success');
                }
            };
            setTimeout(function () {
                xdr.send(value);
            }, 0);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    if (this.response.indexOf('@ERROR_MSG') !== -1) {
                        STBSUBFORM.showResult(this.response, 'fail');
                    } else {
                        STBSUBFORM.showResult(this.response, 'success');
                    }
                }
            }
            xhr.send(value);
        }
    },
    serializeValue: function (nodeList) {
        nodeList = [].slice.call(nodeList);
        var serializeText = '';
        for (var index = 0; index < nodeList.length; index++) {
            var itemKey = nodeList[index].id.replace('stb_', '');
            var itemValue = nodeList[index].value;
            if (itemKey === '$phone') {
                itemValue = itemValue.replace(/-/gi, '');
            }
            serializeText += itemKey + '=';
            serializeText += encodeURIComponent(itemValue);
            if (index + 1 !== nodeList.length) {
                serializeText += '&';
            }
        }
        return serializeText;
    },
    getValue: function () {
        var inputValues = document.querySelectorAll('input');
        return inputValues;
    },
    showResult: function (response, status) {
        var resMsg;
        var resultDom = document.getElementById('stb_form_result');
        if (status === 'fail') {
            var resMsg = '<p>' + response.split('ERROR_MSG:')[1].split('-->')[0] + '</p>';
        } else {
            var resMsg = response.split('<div class="msg">')[1].split('</div>')[0];
        }

        if (resMsg.indexOf('�대� 援щ룆 以묒씤 �대찓��') !== -1) {
            STBSUBFORM.showError('stb_email', response.split('ERROR_MSG:')[1].split('-->')[0]);
        } else {
            resultDom.style.display = 'block';
            resultDom.innerHTML = resMsg;
            if (status === 'success') {
                resultDom.className += ' success';
            } else if (status === 'fail') {
                resultDom.className += ' fail';
            }
        }
    },
    openModal: function () {
        var modal = document.getElementById('stb_form_modal');
        modal.className = modal.className.replace('blind', '');
    },
    closeModal: function () {
        var modal = document.getElementById('stb_form_modal');
        modal.className += ' blind';
    },
    form: document.getElementById('stb_subscribe_form'),
    modalOpenButton: document.getElementById('stb_form_modal_open'),
    modalCloseButton: document.getElementById('stb_form_modal_close'),
    modalBgButton: document.getElementById('stb_form_modal_bg'),
    phoneNumerInput: document.getElementById('stb_$phone'),
}

STBSUBFORM.form.addEventListener('submit', STBSUBFORM.formRequest);
if (STBSUBFORM.modalOpenButton !== null) {
    STBSUBFORM.modalOpenButton.addEventListener('click', STBSUBFORM.openModal);
}
if (STBSUBFORM.modalCloseButton !== null) {
    STBSUBFORM.modalCloseButton.addEventListener('click', STBSUBFORM.closeModal);
}
if (STBSUBFORM.modalBgButton !== null) {
    STBSUBFORM.modalBgButton.addEventListener('click', STBSUBFORM.closeModal);
}
if (STBSUBFORM.phoneNumerInput !== null) {
    STBSUBFORM.phoneNumerInput.addEventListener('keyup', STBSUBFORM.validatePhoneNumber);
    STBSUBFORM.phoneNumerInput.addEventListener('keydown', STBSUBFORM.validatePhoneNumber);
}
if (window.location.search.indexOf('groupIds') !== -1) {
    STBSUBFORM.form.action += '?groupIds' + window.location.search.split('groupIds')[1];
}