import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../slices/postsSlice';
import './PostItem.scss';

function PostItem(props) {
    const post = props.post;
    const dispatch = useDispatch();

    return (
        <div className="post">
            <div className="post__title">
                <h2>{post.post_title}</h2>
            </div>
            <div className="post__image">
                <img src={post.image_url} alt={post.image_alt}></img>
            </div>
            <div className="post__info">
                <div className="author">
                    <span>Автор: <b>{post.nickname}</b></span>
                </div>
                <div className="date">
                    <span>Дата: {post.post_date} {post.post_time}</span>
                </div>
                <div className="tags">
                    <span>Теги: {post.post_tags}</span>
                </div>
            </div>
            <div className="post__text">
                <span>{post.post_text}</span>
            </div>
            <div className="post__delete">
                <span onClick={() => dispatch(deletePost(post.post_id))}>Удалить пост</span>
            </div>
        </div>
    )
}

export default PostItem;
