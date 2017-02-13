import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory,Link} from 'react-router';
import * as actions from './topicActionCreator';
import Header from '../common/Header';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import LoginWarn from '../common/LoginWarn';
import * as tools from '../common/tools';
import GoTop from '../common/GoTop';

import topicStyle from './topic.less';

class Topic extends Component {
    
    componentWillMount() {
        const id = this.props.params.id;
        const {renderTopic} = this.props;
        document.body.scrollTop = 0;
        renderTopic(id);
    }
    

    render() {
        const {topicData} = this.props;
        const {title,tab,author,create_at,visit_count,reply_count,content,replies} = topicData;
        const {loginname,avatar_url} = author;
        const left = (<i className='iconfont icon-back'></i>);
        const onClick = browserHistory.goBack;
        const accesstoken = localStorage.getItem('accesstoken');
        return (
            <div>
                <div className={topicStyle.headerContainer}>
                    <Header title='详情' left={left} leftClick={onClick}/>
                </div>
                <div className={topicStyle.topicContainer}>
                    <div className={topicStyle.topic}>
                        <h3 className={topicStyle.title}>
                            <i className={`iconfont icon-${tab}`}></i>
                            {title}
                        </h3>
                        <div className={topicStyle.msg}>
                            <div className={topicStyle.pic}>
                                <Link to={`/cnode-react/user/${loginname}`}><img src={avatar_url} className={topicStyle.avatar}/></Link>
                            </div>
                            <div className={topicStyle.msgDetail}>
                                <div>
                                    <Link to={`/cnode-react/user/${loginname}`}><span>{loginname}</span></Link>
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
                        <CommentList replies={replies}/>
                    </div>
                    <div className={topicStyle.bottom}>
                        {
                            !accesstoken ? 
                            <LoginWarn/> :
                            <CommentForm/> 
                        }
                    </div>
                </div>
                <GoTop/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicData: state.topicState.topicData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderTopic : (id)=>{
            dispatch(actions.fetchTopic(id))//dispatch的是actionCreator的执行结果
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);//mapStateToProps,mapDispatchToProps参数是有顺序的