import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../common/Header';
import loginStyle from './login.less';
import {hashHistory} from 'react-router';
import axios from 'axios';
const url='https://cnodejs.org/api/v1/';
import * as actions from './loginActionCreator';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Login extends Component {
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
        const {getLogin} = this.props;
        const input = this.input.value.trim();
        e.preventDefault();
        if(!input) {
            alert('请输入您的Access Token!');
        }else{
            this.getLoginData (getLogin,input);
        }
    }

    getLoginData (cb,accesstoken) {
        axios.post(url + 'accesstoken' ,{
            accesstoken
        }).then(res => {
            cb(res.data);
            localStorage.setItem('accesstoken',accesstoken)
            localStorage.setItem('loginname',res.data.loginname);
            hashHistory.push('/my');
        }).catch(error => {
            console.log(error);
            alert('可能您的Access Token有误！')
        })
    }

    render() {
        const left = (<i className='iconfont icon-back'></i>);
        const onClick = hashHistory.goBack;
        return (
            <div className={loginStyle.login}>
                <div className={loginStyle.headerContainer}>
                    <Header title='登录' left={left} leftClick={onClick}/>
                </div>
                <form className={loginStyle.form} onSubmit={this.handleSubmit}>
                    <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <input ref={node=>{this.input=node}} type='text' placeholder='请输入你的Access Token'/>
                        <button type='submit'>登录</button>
                    </ReactCSSTransitionGroup>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLogin : (loginData) => {
            dispatch(actions.getLogin(loginData));
        }
    }
}

export default connect(null,mapDispatchToProps)(Login);