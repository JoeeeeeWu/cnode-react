import React, { Component } from 'react';
import Comment from './Comment';
import topicStyle from './topic.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CommentList extends Component {
    render() {
        const {replies}=this.props;
        return (
            <ul className={topicStyle.commentList}>
                <ReactCSSTransitionGroup transitionName="fade-slide" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {replies.map(function(data){
                        return <Comment data={data} key={data.id}/>
                    })}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }
}

export default CommentList;