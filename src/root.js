import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import router from './router';

import 'babel-polyfill';

import initReactFastclick from 'react-fastclick';
initReactFastclick();

import 'normalize.css/normalize.less';
import './common/common.less';
import './common/Iconfont/iconfont.css';

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
)