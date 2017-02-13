import React, { Component } from 'react';
import {IndexLink,Link} from 'react-router';
import footerStyle from './footer.less';

class Footer extends Component {
    render() {
        return (
            <footer className={footerStyle.footer}>
                <ul>
                    <li>
                        <IndexLink to='/cnode-react/' activeClassName={footerStyle.active}>
                            <i className='iconfont icon-home'></i>
                            <span>首页</span>
                        </IndexLink>
                    </li>
                    <li>
                        <Link to='/cnode-react/createTopic' activeClassName={footerStyle.active}>
                            <i className='iconfont icon-publish'></i>
                            <span>发表</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/cnode-react/msg' activeClassName={footerStyle.active}>
                            <i className='iconfont icon-msg'></i>
                            <span>消息</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/cnode-react/my' activeClassName={footerStyle.active}>
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