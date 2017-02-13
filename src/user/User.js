import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import UserCommon from '../common/UserCommon';
import Header from '../common/Header';
import userStyle from './user.less';

class User extends Component {
    render() {
        const loginname = this.props.params.loginname;
        const left = (<i className='iconfont icon-back'></i>);
        const onClick = hashHistory.goBack;
        return (
            <div>
                <div className={userStyle.headerContainer}>
                    <Header title={`${loginname}的资料`} left={left} leftClick={onClick}/>
                </div>
                <div className={userStyle.content}>
                    <UserCommon loginname={loginname}/>
                </div>
            </div>
        );
    }
}

export default User;