import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Postcomp';
import FullwidthPost from '../../components/FullPost/FullwidthPost';
import NewPostcomp from '../../components/NewPost/NewPostcomp';
import './Blog.css';

class Blog extends Component {
    componentDidMount() {
        const post = axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res=>{
                console.log(res);
            })
    }

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
