import React from 'react';

const SingleNews = props => (
    <div>
        <a href={props.links.permalink} target='__blank'> {props.title} </a>
    </div>
)




export default SingleNews;