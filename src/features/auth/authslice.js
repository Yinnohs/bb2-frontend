import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../baseApi";
import axios from "axios";

const authAPi = axios.create({baseURL:`${baseUrl}/auth`})

const headers = {'Content-Type': 'application/json'}

export const LoginRequest = createAsyncThunk('auth/loginRequest,', async (loginPayload,{rejectWithValue})=>{
    try {
        const { data } = await authAPi.post("/local/login", loginPayload, {headers:headers})

        localStorage.setItem('at', data.jwt)

        return data
    } catch (error) {
        return  rejectWithValue(error.message)
    }
})

export const registerRequest = createAsyncThunk('auth/registerRequest', async (registerPayload, {rejectWithValue})=>{
    try {
        const { data } = await authAPi.post("/local/register", registerPayload, {headers:headers})

        localStorage.setItem('at', data.jwt)
        return data
    } catch (error) {

        if(error.reponse && error.reponse.data.message){
            return rejectWithValue(error.response.data.message)
        }

        return  rejectWithValue(error.message)
    }
})




const initialState = {
    user: {},
    token: localStorage.getItem('at') ? localStorage.getItem('at') : null ,
    staus:'', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
    
}

export const  authSlice =  createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthData:(state, action )=>{
            const data = action.payload
            state.token = data?.jwt
            state.user = data?.user
        }
    },
    extraReducers(builder){
        builder
        .addCase(LoginRequest.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(LoginRequest.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const authData = action.payload
            state.user = authData?.user
            state.token = authData?.jwt 
        })

        .addCase(LoginRequest.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

        .addCase(registerRequest.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(registerRequest.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const authData = action.payload
            state.user = authData?.user
            state.token = authData?.jwt 
        })

        .addCase(registerRequest.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})


export const getAuthData = (state)=> state.auth
export const getAccessToken = (state)=> state.token
export const { setAuthData }  = authSlice.actions
export  default authSlice.reducer