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
                </div>
                <GoTop/>
                <Footer index='0'/>
            </div>
        );
    }
}

export default Home;