import axios from 'axios';
import {browserHistory} from 'react-router';

const url='https://cnodejs.org/api/v1/';

function isLogin(accesstoken){
    return {
        type : 'IS_LOGIN',
        accesstoken
    }
}

function getLogin(loginData){
    return {
        type : 'GET_LOGINDATA',
        loginData
    }
}

function getLoginData (cb,accesstoken) {
    axios.post(url + 'accesstoken' ,{
        accesstoken
    }).then(res => {
        cb(res.data);
    }).catch(error => {
        console.log(error);
        alert('您的Access Token有误！')
    })
}

export function fetchLogin(accesstoken){
    return dispatch => {
        getLoginData(loginData => {
            dispatch(getLogin(loginData));
            console.log(loginData);
            localStorage.setItem("accesstoken",accesstoken);
            localStorage.setItem("loginname",loginData.loginname);
            dispatch(isLogin(accesstoken));
            alert('登录成功！');
            browserHistory.push('/cnode-react//my');

        },accesstoken)
    }
}
