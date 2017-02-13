import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import MsgDetailStyle from './msgDetail.less';
import * as actions from './msgActionCreator';
import * as tools from '../common/tools';

class MsgDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasNotClass : 'active',
            hasClass: null,
            listData: []
        };
        this.handleClickHasNot = this.handleClickHasNot.bind(this);
        this.handleClickHas = this.handleClickHas.bind(this);
    }

    handleClickHasNot(){
        const {hasnot_read_messages} = this.props.msgData;
        this.setState({
            hasNotClass : 'active',
            hasClass: null,
            listData: hasnot_read_messages
        })
    }

    handleClickHas(){
        const {has_read_messages} = this.props.msgData;
        this.setState({
            hasNotClass : null,
            hasClass: 'active',
            listData: has_read_messages
        })
    }
    
    componentWillMount() {
        const {renderMsg} = this.props;
        const accesstoken = localStorage.getItem('accesstoken');
        renderMsg(accesstoken);
    }

    componentWillReceiveProps(nextProps) {
        const {hasnot_read_messages} = nextProps.msgData;
        console.log(hasnot_read_messages);
        this.setState({
            listData : hasnot_read_messages
        });
    }
    
    render() {

        return (
            <div>
                <ul className={MsgDetailStyle.menu}>
                    <li className={MsgDetailStyle[this.state.hasNotClass]} onClick={this.handleClickHasNot}>未读消息</li>
                    <li className={MsgDetailStyle[this.state.hasClass]} onClick={this.handleClickHas}>已读消息</li>
                </ul>
                {this.state.listData.map(function(item,index){
                    const {type,author : {loginname},topic : {id,title},reply : {content,create_at}} = item;
                    return (<li key={index} className={MsgDetailStyle.msgItem}>
                                <Link to={`/topic/${id}`}>
                                    <p>{loginname}在话题{title}中{type=='at' ? '@' : '回复'}了你</p>
                                    <p className={MsgDetailStyle.time}>{tools.formatTime(create_at)}</p>
                                </Link>
                            </li>)
                   
                })}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderMsg : (accesstoken)=>{
            dispatch(actions.fetchMsg(accesstoken))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        msgData : state.msgState.msgData
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MsgDetail);