import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../common/Header';
import loginStyle from './login.less';
import {hashHistory} from 'react-router';
import * as actions from '../common/commonActionCreator';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Login extends Component {
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
        const {login} = this.props;
        const input = this.input.value.trim();
        e.preventDefault();
        if(!input) {
            alert('请输入您的Access Token!');
            return;
        }
        login(input)
    }

    render() {
        const left = (<i className='iconfont icon-back'></i>);
        const onClick = hashHistory.goBack;
        return (
            <div className={loginStyle.login}>
                <div className={loginStyle.headerContainer}>
                    <Header title='登录' left={left} leftClick={onClick}/>
                </div>
                <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    <form className={loginStyle.form} onSubmit={this.handleSubmit}>
                        <input ref={node=>{this.input=node}} type='text' placeholder='请输入你的Access Token'/>
                        <button type='submit'>登录</button>
                    </form>
                </ReactCSSTransitionGroup>
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