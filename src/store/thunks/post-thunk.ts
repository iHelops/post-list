import {createAsyncThunk} from "@reduxjs/toolkit";
import {Post} from "../../models/post";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'post/fetch',
    async () => {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
)