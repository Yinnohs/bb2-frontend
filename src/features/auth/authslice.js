import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        user_id:1,
        name: "sexy admin",
        surname: "really sexy admin",
        email: "admin@admin.com",
        roles:[{
            role_id:1,
            role:  "ADMIN"
        }]

    },
    token:'',
    staus:'', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
    
}

export const  authSlice =  createSlice({
    name:'auth',
    initialState,
    reducers:{
        register:(state, action )=>{
            const data = action.payload
        },
        login: (state, action)=>{
            const data = action.payload
        }
    }
})


export const getAuthData = (state)=> state.auth
export const { register, login }  = authSlice.actions
export  default authSlice.reducer