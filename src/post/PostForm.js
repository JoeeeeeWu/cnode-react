import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PostFormStyle from './postForm.less';
import axios from 'axios';
const url='https://cnodejs.org/api/v1/';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PostForm extends Component {
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
        e.preventDefault();
        const tab = this.tab.value;
        const title = this.title.value;
        const content = this.content.value;
        const accesstoken = localStorage.getItem('accesstoken');
        if(!tab){
            alert('你需要为主题选择一个分类！');
            return;
        }else if(title.length<10){
            alert('标题需要10个字以上');
            return;
        }else if(content.length<30){
            alert('内容需要30个字以上！');
            return;
        }
        axios.post(url + 'topics',{
            accesstoken,
            title,
            tab,
            content
        }).then(res=>{
            const topicId=res.data.topic_id;
            console.log(res.data);
            hashHistory.push(`/cnode-react/topic/${topicId}`)
        }).catch(error=>{
            alert('发表主题失败！');
            console.log(error);
        })
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                <form onSubmit = {this.handleSubmit} key='postForm'>
                    <select name='tab' className={PostFormStyle.tab} ref={node=>{this.tab=node}}>
                        <option value=''>请选择发表的话题类型</option>
                        <option value ="share">分享</option>
                        <option value ="ask">问答</option>
                        <option value="job">招聘</option>
                    </select>
                    <textarea rows='1' className={PostFormStyle.title} placeholder='请输入话题标题，10字以上' ref={node=>{this.title=node}}></textarea>
                    <textarea rows='12' className={PostFormStyle.content} placeholder='请输入话题内容，支持markdown写法，30字以上' ref={node=>{this.content=node}}></textarea>
                    <button type='submit' className={PostFormStyle.submit}>点击发表</button>
                </form>
            </ReactCSSTransitionGroup>
        );
    }
}

export default PostForm;