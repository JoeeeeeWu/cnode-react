import React, { Component } from 'react';
import headerStyle from './header.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {
    render() {
        const {title,left,right,leftClick,rightClick} = this.props;
        var leftbg = left ? 'btnActive' : null;
        var rightbg = right ? 'btnActive' : null;
        return (
            <ReactCSSTransitionGroup transitionName="down" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                <header className={headerStyle.header} key='header'>
                    <div className={`${headerStyle.left} ${headerStyle[leftbg]}`} onClick={leftClick}>
                        {left}
                    </div>
                    <h2 className={headerStyle.title}>{title}</h2>
                    <div className={`${headerStyle.right} ${headerStyle[rightbg]}`} onClick={rightClick}>
                        {right}
                    </div>
                </header>
            </ReactCSSTransitionGroup>
        );
    }
}

export default Header;