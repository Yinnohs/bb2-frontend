import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token:'',
    staus:'', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
    
}

const  authSlice =  createSlice({
    name:'auth',
    initialState,
    reducers:{
        getUserData:{
            reducer(state, action){
                state.user;
            }
        }
    }
}) 