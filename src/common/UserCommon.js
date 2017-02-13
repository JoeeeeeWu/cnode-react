import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../my/myActionCreator';
import userCommonStyle from './userCommon.less';
import * as tools from '../common/tools';

class UserCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicClass : 'active',
            replayClass: null,
            listData: []
        };
        this.handleClickTopic = this.handleClickTopic.bind(this);
        this.handleClickReplay = this.handleClickReplay.bind(this);
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
        renderUser(loginname);
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
                    {this.state.listData ? 
                    this.state.listData.map(function(data){
                        const {title,last_reply_at,id} = data;
                        return (
                            <li key={last_reply_at} className={userCommonStyle.item}>
                                <Link to={`/topic/${id}`}>
                                    <p className={userCommonStyle.title}>
                                        {title}
                                    </p>
                                    <p className={userCommonStyle.time}>{tools.formatTime(last_reply_at)}</p>
                                </Link>
                            </li>
                        )
                    })
                    : null
                    }
                </ul>
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
        renderUser : (loginname)=>{
            dispatch(actions.fetchUser(loginname))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserCommon);