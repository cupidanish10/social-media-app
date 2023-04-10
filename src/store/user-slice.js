import { createSlice } from "@reduxjs/toolkit";

// user initialState

const userInitialState = {
    userList: [
        {name: '', email: ''}
    ],
    loggedInUser: null
}

// user slice
const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        addUser( state, action ) {
            state.userList.push( action.payload)
        },

        login(state, action ) {
            // console.log("actions", action)
            state.loggedInUser = action.payload
        },

        logout() {
          
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;
