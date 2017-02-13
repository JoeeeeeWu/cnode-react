import React, { Component } from 'react';
import Footer from '../common/Footer'
import Nav from './Nav';
import List from './List';
import homeStyle from './home.less';
import GoTop from '../common/GoTop';

class Home extends Component {
    render() {
        var tab = this.props.location.query.tab || null;
        return (
            <div>
                <Nav tab={tab}/>
                <div className={homeStyle.listContainer}>
                    <List tab={tab}/>
                    <p className={homeStyle.more}>
                        正在加载中...
                    </p>
                </div>
                <GoTop/>
                <Footer/>
            </div>
        );
    }
}

export default Home;