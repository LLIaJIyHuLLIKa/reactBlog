import React from 'react';
import './Blog.scss';
import BlogHeader from './BlogHeader/BlogHeader';
import BlogContent from './BlogContent/BlogContent';
import BlogFooter from './BlogFooter/BlogFooter';

function Blog(props) {
    return (
        <div className="Blog">
            <div className="container">
                <BlogHeader openModal={props.openModal} />
                <BlogContent />
                <BlogFooter />
            </div>
        </div>
    )
}

export default Blog;
