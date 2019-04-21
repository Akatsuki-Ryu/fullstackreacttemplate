import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/Postcomp';
import FullwidthPost from '../../components/FullPost/FullwidthPost';
import NewPostcomp from '../../components/NewPost/NewPostcomp';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedpostid: null,
        selectedpostdata: []
    };

    componentDidMount() {
        const post = axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedposts = posts.map(data => {
                    return {
                        ...data,
                        author: "oops"
                    }
                })
                console.log(updatedposts);
                this.setState({posts: updatedposts})
            })
    }

    postselected = (data) => {
        this.setState({selectedpostid: data.id});
        this.setState({selectedpostdata: data});
    }

    render() {
        const posts = this.state.posts.map(data => {
                return <Post
                    key={data.id}
                    title={data.title}
                    author={data.author}
                    clicked={() => this.postselected(data)}/>
            }
        )
        return (
            <div>
                <section className="Posts">
                    {posts}

                </section>
                <section>
                    <FullwidthPost selectedpostid={this.state.selectedpostid}
                                   postdata={this.state.selectedpostdata}/>
                </section>
                <section>
                    <NewPostcomp/>
                </section>
            </div>
        );
    }
}

export default Blog;
