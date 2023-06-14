import axios from "axios";
import { baseUrl } from "../baseApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const suppliersApi = axios.create({baseURL:`${baseUrl}/supplier`})
const suppliersAdminApi = axios.create({baseURL:`${baseUrl}/admin/supplier`})

export const fetchAllsuppliers = createAsyncThunk('suppliers/fetchAll', async ({rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await suppliersApi.get(`/all`,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createSupplier = createAsyncThunk('suppliers/create', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await suppliersAdminApi.get(`/create`,
        payload
        ,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateSupplier = createAsyncThunk('suppliers/update', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await suppliersAdminApi.get(`/update`,
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
    suppliers:[],
    status: 'idle',
    error: null
}


const supplierSlice = createSlice({
    name:'suppliers',
    initialState,
    extraReducers(builder){
        builder
        .addCase(fetchAllsuppliers.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(fetchAllsuppliers.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
            state.suppliers = payload
        })

        .addCase(fetchAllsuppliers.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
        .addCase(createSupplier.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(createSupplier.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
            state.suppliers.push(payload)
        })

        .addCase(createSupplier.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

        .addCase(updateSupplier.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(updateSupplier.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
        })

        .addCase(updateSupplier.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})


export const selectAllSuppliers = (state) => state.suppliers.suppliers
export const selectsuppliersStatus = (state)=> state.suppliers.status
export const selectsuppliersError = (state)=> state.suppliers.error
export const selectOneSupplierById = (state, id) => state.suppliers.suppliers.find((item)=> item.item_id === id)
export default supplierSlice.reducer