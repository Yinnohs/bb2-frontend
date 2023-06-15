import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../baseApi";
import axios from "axios";

const priceReductionsApi = axios.create({baseURL:`${baseUrl}/price-reduction`})
const priceReductionsAdminApi = axios.create({baseURL:`${baseUrl}/admin/discount`})

export const fetchAllpriceReductions = createAsyncThunk('priceReductions/fetchAll', async (_,{rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await priceReductionsApi.get(`/all`,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createPriceReduction = createAsyncThunk('priceReductions/create', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await priceReductionsAdminApi.get(`/create`,
        payload
        ,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updatePriceReduction = createAsyncThunk('priceReductions/update', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await priceReductionsAdminApi.get(`/update`,
        payload
        ,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState = {
    priceReductions:[],
    status: 'idle',
    error: null
}


const priceReductionslice = createSlice({
    name:'priceReductions',
    initialState,
    extraReducers(builder){
        builder
        .addCase(fetchAllpriceReductions.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(fetchAllpriceReductions.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
            state.priceReductions = payload
        })

        .addCase(fetchAllpriceReductions.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
        .addCase(createPriceReduction.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(createPriceReduction.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
            state.priceReductions.push(payload)
        })

        .addCase(createPriceReduction.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

        .addCase(updatePriceReduction.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(updatePriceReduction, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
        })

        .addCase(updatePriceReduction.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})


export const selectAllpriceReductions = (state) => state.priceReductions.priceReductions
export const selectPriceReductionstatus = (state)=> state.priceReductions.status
export const selectPriceReductionsError = (state)=> state.priceReductions.error
export const selectOneItemById = (state, id) => state.priceReductions.priceReductions.find((item)=> item.item_id === id)
export default priceReductionslice.reducer