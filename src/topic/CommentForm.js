import React, { Component } from 'react';
import {connect} from 'react-redux';
import commentFormStyle from './commentForm.less';
import * as actions from './topicActionCreator';
import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const {relyId,topicId,loginname,handleRelyClick,getTopicData,renderTopic} = this.props;
        if(!this.text.value.trim()){
            alert('回复的内容不能为空！');
            return
        }
        const foot = '[——来自吴小粥的cnode-react手机版](https://wuxiaozhou.coding.me/cnode-react/)';
        const content = relyId ? `[@${loginname}](/user/${loginname}) ${this.text.value} ${foot}` : `${this.text.value} ${foot}`;
        const accesstoken = localStorage.getItem('accesstoken');
        axios.post(url + 'topic/' + topicId + '/replies',{
            accesstoken,
            reply_id : relyId,
            content
        }).then(function(){
            alert('回复成功！');
            getTopicData(renderTopic,topicId);
            this.text.value = null;
        }).catch(error=>{
            alert('回复失败！！！');
            console.log(error);
            alert(error);
        });
        if(handleRelyClick) handleRelyClick();
    }

    render() {
        return (
            <form className={commentFormStyle.form} onSubmit={this.handleSubmit}>
                <textarea rows="7" placeholder='支持markdown语法' ref={node=>{this.text=node}} className={commentFormStyle.text}></textarea>
                <button type='submit' className={commentFormStyle.button}>回复</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicId : state.topicState.topicData.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderTopic : (topicData)=>{
            dispatch(actions.getTopic(topicData))//dispatch的是actionCreator的执行结果
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);