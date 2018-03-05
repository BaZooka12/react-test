import React from 'react';
import Postimg from 'assets/post-icon.png';
import { Link } from 'react-router-dom';

const Post = (props) => (
  <div className="post">
    <div className="post-container">
      <h3 className="post-title">{props.title}</h3>
      <p>
        {props.text}
      </p>
      <div className="post-info">
        <div className="post-author">
          {props.author}
        </div>
        <div className="post-date">{props.date}</div>
        <Link className="post-link" to={`/article/${props.id}`}>Read more...</Link>
      </div>
    </div>
    <img className="post-img" src={Postimg} alt="ololo"/>
  </div>
)

export default Post;
