import React, { Component } from 'react';

import Post from '../../components/Post/Postcomp';
import FullwidthPost from '../../components/FullPost/FullwidthPost';
import NewPostcomp from '../../components/NewPost/NewPostcomp';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullwidthPost />
                </section>
                <section>
                    <NewPostcomp />
                </section>
            </div>
        );
    }
}

export default Blog;
