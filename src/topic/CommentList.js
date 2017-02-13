import React, { Component } from 'react';
import Comment from './Comment';
import topicStyle from './topic.less';

class CommentList extends Component {
    render() {
        const {replies}=this.props;
        return (
            <ul className={topicStyle.commentList}>
                {replies.map(function(data){
                    return <Comment data={data} key={data.id}/>
                })}
            </ul>
        );
    }
}

export default CommentList;