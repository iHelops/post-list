import {Post} from "../../models/post";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPosts} from "../thunks/post-thunk";

interface PostState {
    posts: Post[];
    status: 'init' | 'loading' | 'success' | 'error'
}

const initialState: PostState = {
    posts: [],
    status: 'init'
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending.type]: (state) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
            state.status = 'success'
        },
        [fetchPosts.rejected.type]: (state) => {
            state.status = 'error'
        }
    }
})

export const postActions = postSlice.actions;
export default postSlice;