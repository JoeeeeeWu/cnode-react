import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../common/Header';
import loginStyle from './login.less';
import {browserHistory} from 'react-router';
import * as actions from '../common/commonActionCreator';

class Login extends Component {
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
        const {login} = this.props;
        e.preventDefault();
        if(!this.input.value.trim()) return;
        login(this.input.value.trim())
    }

    render() {
        const left = (<i className='iconfont icon-fanhui'></i>);
        const onClick = browserHistory.goBack;
        return (
            <div className={loginStyle.login}>
                <div className={loginStyle.headerContainer}>
                    <Header title='登录' left={left} leftClick={onClick}/>
                </div>
                <form className={loginStyle.form} onSubmit={this.handleSubmit}>
                    <input ref={node=>{this.input=node}} type='text' placeholder='请输入你的Access Token'/>
                    <button type='submit'>登录</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login : (accesstoken) => {
            dispatch(actions.fetchLogin(accesstoken))
        }
    }
}

export default connect(null,mapDispatchToProps)(Login);