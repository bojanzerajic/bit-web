import React from 'react';


const TextContent = props => <div className="TextContent__singleItem"><h4>{props.blog.title}</h4> <p> {props.blog.description}</p></div>


export default TextContent;