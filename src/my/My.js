import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import LoginWarn from '../common/LoginWarn';
import Header from '../common/Header';
import Footer from '../common/Footer';
import UserCommon from '../common/UserCommon';
import myStyle from './my.less'; 

class My extends Component {
    clickHandler(){
        var r=confirm("确定退出登录？");
        if(r===true){
            localStorage.clear();
            browserHistory.push('/cnode-react/my');
        }
    }

    render() {
        const accesstoken = localStorage.getItem('accesstoken');
        const loginname = localStorage.getItem('loginname');
        const right = accesstoken ? (<i className='iconfont icon-tuichu'></i>) : null;
        return (
            <div>
                <div className={myStyle.headerContainer}>
                    <Header title='个人中心' right={right} rightClick={this.clickHandler}/>
                </div>
                <div className={myStyle.content}>
                    {!accesstoken ? 
                        <LoginWarn/> : 
                        <UserCommon loginname={loginname}/>
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default My;