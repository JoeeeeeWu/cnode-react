import React,{Component} from 'react';
import {Router,Route,IndexRoute,browserHistory,Redirect} from 'react-router';
import Home from './home/Home';
import Topic from './topic/Topic';
import Post from './post/Post';
import Msg from './msg/Msg';
import My from './my/My'
import Login from './login/Login'
import User from './user/User';

const router = (
    <Router history={browserHistory}>
        <Route path='/cnode-react/' component={Home}/>
        <Route path='/cnode-react/createTopic' component={Post}/>
        <Route path='/cnode-react/msg' component={Msg}/>
        <Route path='/cnode-react/my' component={My}/>
        <Route path='/cnode-react/topic/:id' component={Topic}/>
        <Route path='/cnode-react/user/:loginname' component={User}/>
        <Router path='/cnode-react/login' component={Login}/>
    </Router>
)

export default router;
