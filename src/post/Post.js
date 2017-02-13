import React, { Component } from 'react';
import LoginWarn from '../common/LoginWarn';
import Header from '../common/Header';
import Footer from '../common/Footer';
import PostForm from './PostForm';
import postStyle from './post.less'; 

class Post extends Component {
    render() {
        const accesstoken = localStorage.getItem('accesstoken');
        return (
            <div>
                <div className={postStyle.headerContainer}>
                    <Header title='发表主题'/>
                </div>
                <div className={postStyle.content}>
                    {!accesstoken ? 
                        <LoginWarn/> : 
                        <PostForm/>
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Post;