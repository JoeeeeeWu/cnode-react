import React, { Component } from 'react';
import headerStyle from './header.less';

class Header extends Component {
    render() {
        const {title,left,right,leftClick,rightClick} = this.props;
        return (
            <header className={headerStyle.header}>
                <div className={headerStyle.left} onClick={leftClick}>
                    {left}
                </div>
                <h2 className={headerStyle.title}>{title}</h2>
                <div className={headerStyle.right} onClick={rightClick}>
                    {right}
                </div>
            </header>
        );
    }
}

export default Header;