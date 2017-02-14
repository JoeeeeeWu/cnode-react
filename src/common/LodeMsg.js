import React, { Component } from 'react';
import lodeMsgStyle from './lodeMsg.less';

class LodeMsg extends Component {
    render() {
        return (
            <p className={lodeMsgStyle.more}>
                {this.props.msg}
            </p>
        );
    }
}

export default LodeMsg;

LodeMsg.defaultProps = {
  msg: '正在加载中...'
}