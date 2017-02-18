import React, { Component } from 'react';
import {connect} from 'react-redux';
import {hashHistory,Link} from 'react-router';
import * as actions from './topicActionCreator';
import Header from '../common/Header';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import LoginWarn from '../common/LoginWarn';
import * as tools from '../common/tools';
import GoTop from '../common/GoTop';
import Tip from '../common/Tip';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

import topicStyle from './topic.less';

class Topic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show : true,
            msg : '正在加载中！'
        };
        this.getTopicData = this.getTopicData.bind(this);
    }
    
    componentWillMount() {
        const id = this.props.params.id;
        const {renderTopic} = this.props;
        document.body.scrollTop = 0;
        this.getTopicData (renderTopic,id)
    }
    
    getTopicData (cb,id) {
        axios.get(url+'topic/'+id,{
            params : {
                data : new Date().getTime()
            }
        }).then(res => {
            cb(res.data.data);
            this.setState({
                show : false
            });
        }).catch(error => {
            console.log(error);
            this.setState({
                msg : '加载失败！'
            })
        })
    }

    render() {
        const {topicData} = this.props;
        const {title,tab,author,create_at,visit_count,reply_count,content,replies} = topicData;
        const {loginname,avatar_url} = author;
        const left = (<i className='iconfont icon-back'></i>);
        const onClick = hashHistory.goBack;
        const accesstoken = localStorage.getItem('accesstoken');
        return ( 
            <div>
                <div className={topicStyle.headerContainer}>
                    <Header title='详情' left={left} leftClick={onClick}/>
                </div>
                    <div className={topicStyle.topicContainer}>
                        {
                            this.state.show ? 
                            <Tip msg={this.state.msg}/> : 
                            <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                                <div className={topicStyle.topic} key="topic">
                                    <h3 className={topicStyle.title}>
                                        <i className={`iconfont icon-${tab}`}></i>
                                        {title}
                                    </h3>
                                    <div className={topicStyle.msg}>
                                        <div className={topicStyle.pic}>
                                            <Link to={`/user/${loginname}`}><img src={avatar_url} className={topicStyle.avatar}/></Link>
                                        </div>
                                        <div className={topicStyle.msgDetail}>
                                            <div>
                                                <Link to={`/user/${loginname}`}><span>{loginname}</span></Link>
                                                <span>发表于{tools.formatTime(create_at)}</span>
                                            </div>
                                            <div>
                                                <span>阅读：{visit_count}</span>
                                                <span>回复：{reply_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={topicStyle.content} dangerouslySetInnerHTML={{__html: content}}/>
                                    <h4 className={topicStyle.reliesNumber}>共{reply_count}条回复：</h4>
                                    <CommentList replies={replies} getTopicData={this.getTopicData}/>
                                    <div className={topicStyle.bottom}>
                                        {
                                            !accesstoken ? 
                                            <LoginWarn/> :
                                            <CommentForm getTopicData = {this.getTopicData}/> 
                                        }
                                    </div>
                                </div>
                            </ReactCSSTransitionGroup>
                        }
                    </div>
                <GoTop/>
            </div>
               
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicData: state.topicState.topicData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderTopic : (topicData)=>{
            dispatch(actions.getTopic(topicData))//dispatch的是actionCreator的执行结果
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);//mapStateToProps,mapDispatchToProps参数是有顺序的