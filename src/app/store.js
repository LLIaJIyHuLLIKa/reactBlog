import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Blog/slices/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
