import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseApi";
import { registerRequest } from "../auth";

const initialState = {
    users:[],
    status:'idle',
    error: null
}

const usersApi = axios.create({baseURL:`${baseUrl}/user`})
const usersAdminApi = axios.create({baseURL:`${baseUrl}/admin/user`})

export const fetchAllUsers = createAsyncThunk('users/fetchAll', async (_,{rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await usersApi.get(`/all`,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const updateUserRequest = createAsyncThunk('users/update', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await usersAdminApi.get(`/update`,
        payload
        ,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteUserRequest = createAsyncThunk('users/delete', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await usersAdminApi.delete(`/delete/${payload}`,
        {
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        changeStateToIdle(state){
            state.status = 'idle'
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchAllUsers.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(fetchAllUsers.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
            state.users = payload
        })

        .addCase(fetchAllUsers.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
            
        })
        .addCase(registerRequest.fulfilled, (state,)=>{
            state.status = 'idle'
        })

        .addCase(deleteUserRequest.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(deleteUserRequest.fulfilled, (state,)=>{
            state.status = 'succeded'
            state.status = 'idle'
        })

        .addCase(deleteUserRequest.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

        .addCase(updateUserRequest.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(updateUserRequest.fulfilled, (state,)=>{
            state.status = 'succeded'
            state.status = 'idle'
        })

        .addCase(updateUserRequest.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
        
}})

export const selectAllUser = (state) => state.users.users
export default userSlice.reducer