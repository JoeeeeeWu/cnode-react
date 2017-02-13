import React, { Component } from 'react';
import LoginWarn from '../common/LoginWarn';
import Header from '../common/Header';
import MsgDetail from './MsgDetail';
import msgStyle from './msg.less'; 
import Footer from '../common/Footer';

class Msg extends Component {
    render() {
        const accesstoken = localStorage.getItem('accesstoken');
        return (
            <div>
                <div className={msgStyle.headerContainer}>
                    <Header title='消息'/>
                </div>
                <div className={msgStyle.content}>
                    {!accesstoken ? 
                        <LoginWarn/> : 
                        <MsgDetail/>
                    }
                </div>
                <Footer index='2'/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accesstoken : state.appState.accesstoken
    }
}

export default Msg;