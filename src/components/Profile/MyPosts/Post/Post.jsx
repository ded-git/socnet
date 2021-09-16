import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
    <div className={s.item}>
        <img src="https://ki.ill.in.ua/m/990x0/24526005.jpg" alt="avatar" />
        {props.message}
        <div>
            <span>Like {props.likesCount}</span>
        </div>
    </div>
       
    );
}

export default Post;