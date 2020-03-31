import React from 'react';
import { useSelector } from 'react-redux';
import { postsList } from '../slices/postsSlice';
import './BlogContent.scss';
import PostsList from './PostsList';

function BlogContent() {
    const posts = useSelector(postsList);

    if(posts.length === 0) {
        return (
            <section className="blog-content">
                <div className="blog-content__description">
                    <span>В данный момент никаких записей не существует!</span>
                </div>
            </section>
        )
    }
    else {
        return (
            <section className="blog-content">
                <div className="blog-content__posts">
                    <PostsList posts={posts} />
                </div>
            </section>
        )
    }
}

export default BlogContent;
