import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import * as actions from './homeActionCreator';

import homeStyle from './home.less';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab : 'all',
            page: 1,
        };
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    componentWillMount(){
        let {renderList,tab}=this.props;
        renderList(tab);
    }

    componentWillReceiveProps(nextProps){
        const {renderList,tab,page} = nextProps;
        if(tab && tab!=this.props.tab){
            document.body.scrollTop = 0;
            renderList(tab);
            this.setState({
                tab : tab,
                page : 1
            });
            console.log(this.state.page);
        }
    }

    scrollHandler(){
        const {renderNextList} = this.props;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var scrollTop = document.body.scrollTop;
        var wholeHeight = document.body.scrollHeight;
        if(windowHeight + scrollTop >= wholeHeight){
            this.setState({
                page : this.state.page + 1
            });
            console.log(this.state.page);
            renderNextList(this.state.tab,this.state.page);
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.scrollHandler);
    }
    

    render() {
        let {listData}=this.props;
        return (
            <ul className={homeStyle.topicsList} >
                {listData.map(function(data,index){
                    return <Item data={data} key={index}/>
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    state.homeState.listData.map(function(data){
    });
    return {
        listData : state.homeState.listData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderList : (tab)=>{
            dispatch(actions.fetchTopics(tab))
        },
        renderNextList : (tab,page)=>{
            dispatch(actions.fetchNextTopics(tab,page))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);