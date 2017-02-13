import React, { Component } from 'react';
import {Link} from 'react-router';
import loginWarnStyle from './LoginWarn.less'

class LoginWarn extends Component {
    render() {
        return (
            <p className={loginWarnStyle.warn}>
                您还没登录，<Link to='/cnode-react/login'>点击登录</Link>！
            </p>
        );
    }
}

export default LoginWarn;