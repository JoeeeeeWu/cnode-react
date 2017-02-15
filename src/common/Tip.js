import React, { Component } from 'react';
import tipStyle from './tip.less';

class Tip extends Component {
    render() {
        return (
            <p className={tipStyle.more}>
                {this.props.msg}
            </p>
        );
    }
}

export default Tip;

Tip.defaultProps = {
  msg: '正在加载中...'
}