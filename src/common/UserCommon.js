import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../my/myActionCreator';
import userCommonStyle from './userCommon.less';
import * as tools from '../common/tools';
import Tip from '../common/Tip';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

class UserCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicClass : 'active',
            replayClass: null,
            listData: [],
            show : true,
            msg : '正在加载中！'
        };
        this.handleClickTopic = this.handleClickTopic.bind(this);
        this.handleClickReplay = this.handleClickReplay.bind(this);
    }

    getUserData (cb,loginname) {
        axios.get(url+'user/'+loginname).then(res => {
            cb(res.data.data);
            this.setState({
                show : false
            });
        }).catch(error => {
            console.log(error);
            this.setState({
                msg : '加载失败！'
            });
        })
    }

    handleClickTopic(){
        const {recent_topics} = this.props.userData;
        this.setState({
            topicClass : 'active',
            replayClass: null,
            listData: recent_topics
        })
    }

    handleClickReplay(){
        const {recent_replies} = this.props.userData;
        this.setState({
            topicClass : null,
            replayClass: 'active',
            listData: recent_replies
        })
    }
    
    componentWillMount() {
        const {loginname,renderUser} = this.props;
        renderUser({});
        this.getUserData(renderUser,loginname);
    }

    componentWillReceiveProps(nextProps) {
        const {recent_topics} = nextProps.userData;
        this.setState({
            listData : recent_topics
        });
    }
    
    
    render() {
        const {loginname,avatar_url,create_at,score} = this.props.userData;
        return (
            <div>
                {
                    this.state.show ?
                    <Tip/> : 
                    <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <div key='userCommon'>
                            <div className={userCommonStyle.userMsg}>
                                <img src={avatar_url} alt="avatar" className={userCommonStyle.avatar}/>
                                <h2 className={userCommonStyle.loginname}>{loginname}</h2>
                                <div className={userCommonStyle.userData}>
                                    <span className={userCommonStyle.score}>积分：{score}</span>
                                    <span>注册于{create_at ? create_at.slice(0,10) : null}</span>
                                </div>
                            </div>
                            <ul className={userCommonStyle.menu}>
                                <li className={userCommonStyle[this.state.topicClass]} onClick={this.handleClickTopic}>主题</li>
                                <li className={userCommonStyle[this.state.replayClass]} onClick={this.handleClickReplay}>回复</li>
                            </ul>
                            <ul className={userCommonStyle.list}>
                                <ReactCSSTransitionGroup transitionName="fade-slide" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                                    {
                                        this.state.listData ? 
                                        this.state.listData.map(function(data,index){
                                            const {title,last_reply_at,id} = data;
                                            return (
                                                <li key={index} className={userCommonStyle.item}>
                                                    <Link to={`/topic/${id}`}>
                                                        <p className={userCommonStyle.title}>
                                                            {title}
                                                        </p>
                                                        <p className={userCommonStyle.time}>{tools.formatTime(last_reply_at)}</p>
                                                    </Link>
                                                </li>
                                            )
                                        }) :
                                        <Msg msg='暂无内容！'/>
                                    }
                                </ReactCSSTransitionGroup>
                            </ul>
                        </div>
                    </ReactCSSTransitionGroup>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.myState.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderUser : (userData)=>{
            dispatch(actions.getUser(userData))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserCommon);