import React, { Component } from 'react';
import itemStyle from './item.less';
import {Link} from 'react-router';
import * as tools from '../common/tools';

class Item extends Component {

    render() {
        let {id,title,reply_count,visit_count,last_reply_at,create_at,author,tab}=this.props.data;
        return (
            <li className={itemStyle.item}>
                <Link to={`/topic/${id}`}>
                    <h3 className={itemStyle.title}> 
                        <i className={`iconfont icon-${tab}`}></i> 
                        {title}
                    </h3>
                    <div className={itemStyle.msg}>
                        <img src={author.avatar_url} className={itemStyle.avatar}/>
                        <div className={itemStyle.msgLeft}>
                            <span>{author.loginname}</span>
                            <span>发表于{tools.formatTime(create_at)}</span>
                        </div>
                        <div className={itemStyle.msgRight}>
                            <span>{reply_count}/{visit_count}</span>
                            <span>最新评论：{tools.formatTime(last_reply_at)}</span>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}

export default Item;