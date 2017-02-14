import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import goTopStyle from './goTop.less';

class GoTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGoTop : false
        };
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    scrollHandler(){
        var scrollTop = document.body.scrollTop;
        if(scrollTop > 100){
            this.setState({
                showGoTop : true
            })
        }else{
            this.setState({
                showGoTop : false
            })
        }
    }

    clickHandler(){
        document.body.scrollTop = 0;
    }

    componentDidMount(){
        window.addEventListener('scroll',this.scrollHandler,false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.scrollHandler,false);
    }

    render() {
        const goTopComp = <p><i className={`iconfont icon-gotop ${goTopStyle.goTopIcon}`} onClick={this.clickHandler}></i></p>;
        const showGoTop = this.state.showGoTop;
        return (
            <div className={goTopStyle.goTop}>
                <ReactCSSTransitionGroup transitionName="topAnima" transitionEnterTimeout={300} transitionLeaveTimeout={500}>
                    {showGoTop ? goTopComp : null}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default GoTop;