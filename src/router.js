import React,{Component} from 'react';
import {Router,Route,IndexRoute,hashHistory,Redirect} from 'react-router';
import Home from './home/Home';
import Topic from './topic/Topic';
import Post from './post/Post';
import Msg from './msg/Msg';
import My from './my/My'
import Login from './login/Login'
import User from './user/User';
import App from './app/App';

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='createTopic' component={Post}/>
            <Route path='msg' component={Msg}/>
            <Route path='my' component={My}/>
            <Route path='topic/:id' component={Topic}/>
            <Route path='user/:loginname' component={User}/>
            <Router path='login' component={Login}/>
        </Route>
    </Router>
)

export default router;
