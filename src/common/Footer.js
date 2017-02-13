import React, { Component } from 'react';
import {IndexLink,Link} from 'react-router';
import footerStyle from './footer.less';

class Footer extends Component {
    render() {
        const {index} = this.props;
        var arr=[];
        arr[index] = 'active';
        return (
            <footer className={footerStyle.footer}>
                <ul>
                    <li className={footerStyle[arr[0]]}>
                        <IndexLink to='/'>
                            <i className='iconfont icon-home'></i>
                            <span>首页</span>
                        </IndexLink>
                    </li>
                    <li className={footerStyle[arr[1]]}>
                        <Link to='/createTopic'>
                            <i className='iconfont icon-publish'></i>
                            <span>发表</span>
                        </Link>
                    </li>
                    <li className={footerStyle[arr[2]]}>
                        <Link to='/msg'>
                            <i className='iconfont icon-msg'></i>
                            <span>消息</span>
                        </Link>
                    </li>
                    <li className={footerStyle[arr[3]]}>
                        <Link to='/my'>
                            <i className='iconfont icon-user'></i>
                            <span>我的</span>
                        </Link>
                    </li>
                </ul>
           </footer>
        );
    }
}

export default Footer;