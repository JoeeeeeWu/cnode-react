import React, { Component } from 'react';
import {IndexLink,Link} from 'react-router';
import {connect} from 'react-redux';

import homeStyle from './home.less';

class Nav extends Component {

    render() {
        var setCur = {};
        if(this.props.tab){
            setCur[this.props.tab] = homeStyle.active
        }else{
            setCur.all=homeStyle.active;
        }
        
        return (
            <nav className={homeStyle.nav}>
                <ul>
                    <li className={setCur.all}><IndexLink to={{ pathname: "/cnode-react/", query: {tab: "all"}}}>全部</IndexLink></li>
                    <li className={setCur.good}><Link to={{ pathname: "/cnode-react/", query: {tab: "good"}}}>精华</Link></li>
                    <li className={setCur.share}><Link to={{ pathname: "/cnode-react/", query: {tab: "share"}}}>分享</Link></li>
                    <li className={setCur.ask}><Link to={{ pathname: "/cnode-react/", query: {tab: "ask"}}}>问答</Link></li>
                    <li className={setCur.job}><Link to={{ pathname: "/cnode-react/", query: {tab: "job"}}}>招聘</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;