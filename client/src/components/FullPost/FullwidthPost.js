import React, {Component} from 'react';

import './FullwidthPost.css';

class FullwidthPost extends Component {


    render() {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if (this.props.selectedpostid!==null) {
            post = (
                <div className="FullPost">
                    <h1>{this.props.postdata.title}</h1>
                    <p>{this.props.postdata.author}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );

        }



        return post;
    }
}

export default FullwidthPost;
