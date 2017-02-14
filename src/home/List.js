import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import * as actions from './homeActionCreator';
import homeStyle from './home.less';
import LodeMsg from '../common/LodeMsg';

import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab : 'all',
            page: 1,
            msg: ':D'
        };
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    getTopicListData(cb,tab,page=1){
        this.setState({
                msg: '正在加载中...'
        });
        axios.get(url+'topics',{
            params: {
                limit: 10,
                tab: tab,
                page: page
            }
        }).then(res=> {
            cb(res.data.data);
            this.setState({
                msg: '加载完成！',
                page : this.state.page +1
            });
        }).catch(error => {
            this.setState({
                msg: '加载失败！'
            });
            console.log(error)
        })
    }

    componentWillMount(){
        let {renderList,tab,extab,expage}=this.props;
        if(!tab && !extab){
            this.getTopicListData(renderList);
        }else if(tab && !extab){
            this.getTopicListData(renderList,tab);
            this.setState({
                tab
            })
        }else if(!tab && extab){
            this.setState({
                page : expage
            })
        }else if(tab && extab && tab === extab){
            this.setState({
                page : expage
            })
        }
    }

    componentWillReceiveProps(nextProps){
        let {renderList,tab} = nextProps;
        if(tab!=this.props.tab){
            renderList([]);
            document.body.scrollTop = 0;
            this.getTopicListData(renderList,tab);
            this.setState({
                page : 1,
                tab
            });
        }
    }

    scrollHandler(){
        const {renderNextList} = this.props;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const scrollTop = document.body.scrollTop;
        const wholeHeight = document.body.scrollHeight;
        if(windowHeight + scrollTop >= wholeHeight){
            this.getTopicListData(renderNextList,this.props.tab,this.state.page)
        }
    }

    componentDidMount(){
        const {exscrollTop} = this.props;
        document.body.scrollTop = exscrollTop;
        window.addEventListener('scroll',this.scrollHandler);
    }

    componentWillUnmount() {
        const {markScroll,markTab,markPage} = this.props;
        markScroll(document.body.scrollTop);
        markTab(this.state.tab);
        markPage(this.state.page);

        window.removeEventListener('scroll',this.scrollHandler);
    }
    

    render() {
        let {listData}=this.props;
        return (
            <div>
                <ul className={homeStyle.topicsList} >
                    {listData.map(function(data,index){
                        return <Item data={data} key={index}/>
                    })}
                </ul>
                <LodeMsg msg={this.state.msg}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listData : state.homeState.listData,
        exscrollTop : state.homeState.exscrollTop,
        extab : state.homeState.extab,
        expage : state.homeState.expage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderList : (listData)=>{
            dispatch(actions.getTopicList(listData))
        },
        renderNextList : (listData)=>{
            dispatch(actions.getNextTopicList(listData))
        },
        markScroll : (scrollTop) => {
            dispatch(actions.getScrollTop(scrollTop))
        },
        markTab : (tab) => {
            dispatch(actions.getTab(tab))
        },
        markPage : (page) => {
            dispatch(actions.getPage(page))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);