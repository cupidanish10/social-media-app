import { createSlice } from "@reduxjs/toolkit";

// user initialState

const postInitialState = {
    postList: [
       
    ]
}

// post slice
const postSlice = createSlice({
    name: 'post',
    initialState: postInitialState,
    reducers: {
        addPost( state , action) {
          state.postList.push( action.payload )

        }
    }
});


export const postActions = postSlice.actions;

export default postSlice;
