import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        postsArray: [],
        searchQuery: ""
    },
    reducers: {
        createPost: (state, action) => {
            state.postsArray.push(action.payload);
        },
        deletePost: (state, action) => {
            state.postsArray.splice(action.payload - 1, 1);
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    }
});

export const { createPost, deletePost, setSearchQuery } = postSlice.actions;

export const postsList = state => state.posts.postsArray;
export const searchQuery = state => state.posts.searchQuery;

export default postSlice.reducer;
