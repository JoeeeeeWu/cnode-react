import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router';
import * as tools from '../common/tools';
import commentStyle from './comment.less';
import CommentForm from './CommentForm';
import axios from 'axios';
const url='https://cnodejs.org/api/v1/';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRelyForm : false,
            ups : 0,
            upsClassName : null
        };
        this.handleRelyClick = this.handleRelyClick.bind(this)
        this.handleUpsClick = this.handleUpsClick.bind(this)
    }

    handleRelyClick(){
        this.setState({
            showRelyForm : !this.state.showRelyForm
        });
    }

    handleUpsClick(){
        const accesstoken = localStorage.getItem('accesstoken');
        const {id} = this.props.data;
        if(accesstoken){
            axios.post(url + 'reply/' + id + '/ups',{
                accesstoken
            }).then(res => {
                const shouldUp = res.data.action;
                if(shouldUp==='up'){
                    this.setState({
                        ups : this.state.ups + 1,
                        upsClassName : 'active'
                    })
                }
                if(shouldUp==='down'){
                    this.setState({
                        ups : this.state.ups - 1,
                        upsClassName : null
                    })
                }
            })
        }else{
            hashHistory.push('/cnode-react/login');
        }
    }
    
    componentWillMount() {
        const {ups} = this.props.data;
        this.setState({
            ups : ups.length
        });
    }
    

    render() {
        const {data,getTopicData} = this.props;
        const {content,author:{loginname,avatar_url},create_at,id} = data;
        return (
            <li className={commentStyle.comment}>
                <div className={commentStyle.msg}>
                    <Link to={`/user/${loginname}`}><img src={avatar_url} className={commentStyle.avatar}/></Link>
                    <div className={commentStyle.msgDetail}>
                        <span><Link to={`/user/${loginname}`}>{loginname}</Link></span>
                        <span>回复于{tools.formatTime(create_at)}</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: content}}/>
                <div className={commentStyle.oper}>
                    <span className={commentStyle.dianzan}><i className={`iconfont icon-dianzan ${commentStyle[this.state.upsClassName]}`} onClick={this.handleUpsClick}></i>{this.state.ups}</span>
                    <i className={`iconfont icon-reply ${commentStyle.reply}`} onClick = {this.handleRelyClick}></i>
                </div>
                <div className={commentStyle.relyFormContainer}>
                    {this.state.showRelyForm ? <CommentForm relyId={id} loginname={loginname} handleRelyClick={this.handleRelyClick} getTopicData={getTopicData}/> : null}
                </div>
            </li>
        );
    }
}

export default Comment;