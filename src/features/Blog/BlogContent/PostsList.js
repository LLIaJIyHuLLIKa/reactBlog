import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem/PostItem';
import { searchQuery } from '../slices/postsSlice';

function PostsList(props) {
    const query = useSelector(searchQuery);

    const postsItems = props.posts.filter(item => {
        if(query !== "") {
            const tags = item.post_tags.split(",");

            return tags.some(tag => tag.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        }

        return true;
    }).map((item) => 
        <PostItem post={item} key={item.post_id} />
    )

    return (
        <>
            {postsItems}
        </>
    )
}

export default PostsList;
