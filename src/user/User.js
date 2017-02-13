import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import UserCommon from '../common/UserCommon';
import Header from '../common/Header';
import userStyle from './user.less';

class User extends Component {
    render() {
        const loginname = this.props.params.loginname;
        const left = (<i className='iconfont icon-fanhui'></i>);
        const onClick = browserHistory.goBack;
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