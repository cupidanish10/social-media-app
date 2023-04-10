import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post-slice";
import userSlice from "./user-slice";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        post: postSlice.reducer
    }
});


export default store;