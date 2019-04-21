import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Postcomp';
import FullwidthPost from '../../components/FullPost/FullwidthPost';
import NewPostcomp from '../../components/NewPost/NewPostcomp';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        const post = axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res=>{
                this.setState({posts: res.data})


            })
    }

    render () {
        const posts = this.state.posts.map(data=>{
            return <Post title={data.title}/>
            }
        )
        return (
            <div>
                <section className="Posts">
                    {posts}

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
