import React from 'react';

import './Postcomp.css';

const postcomp = (props) => (
    <article className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default postcomp;
