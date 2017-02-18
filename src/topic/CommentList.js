import React, { Component } from 'react';
import Comment from './Comment';
import topicStyle from './topic.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CommentList extends Component {
    render() {
        const {replies,getTopicData}=this.props;
        return (
            <ul className={topicStyle.commentList}>
                <ReactCSSTransitionGroup transitionName="fade-slide" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {replies.map(function(data,index){
                        return <Comment data={data} key={index} getTopicData={getTopicData}/>
                    })}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }
}

export default CommentList;