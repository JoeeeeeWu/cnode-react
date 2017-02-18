import React,{Component} from 'react';
import {Router,Route,IndexRoute,hashHistory,Redirect} from 'react-router';
import Home from './home/Home';
import App from './app/App';

const Post = (location,callback) => {
    require.ensure([],require => {
        callback(null,require('./post/Post').default)
    },'post')
}

const Msg = (location,callback) => {
    require.ensure([],require => {
        callback(null,require('./msg/Msg').default)
    },'msg')
}

const My = (location,callback) => {
    require.ensure([],require => {
        callback(null,require('./my/My').default)
    },'my')
}

const Topic = (location,callback) => {
    require.ensure([],require => {
        callback(null,require('./topic/Topic').default)
    },'topic')
}

const User = (location,callback) => {
    require.ensure([],require => {
        callback(null,require('./user/User').default)
    },'user')
}

const Login = (location,callback) => {
    require.ensure([],require => {
        callback(null,require('./login/Login').default)
    },'login')
}

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='createTopic' getComponent={Post}/>
            <Route path='msg' getComponent={Msg}/>
            <Route path='my' getComponent={My}/>
            <Route path='topic/:id' getComponent={Topic}/>
            <Route path='user/:loginname' getComponent={User}/>
            <Route path='login' getComponent={Login}/>
        </Route>
    </Router>
)

export default router;
