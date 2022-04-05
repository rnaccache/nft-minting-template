import { configureStore } from '@reduxjs/toolkit';
import metamaskReducer from '../features/metamask/metamaskSlice';

export const store = configureStore({
  reducer: {
    metamask: metamaskReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch