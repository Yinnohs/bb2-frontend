import axios from 'axios'
import { baseUrl } from '../baseApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const suppliersApi = axios.create({ baseURL: `${baseUrl}/supplier` })
const suppliersAdminApi = axios.create({ baseURL: `${baseUrl}/admin/supplier` })

export const fetchAllsuppliers = createAsyncThunk(
    'suppliers/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('at')
            const { data } = await suppliersApi.get(`/all`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

export const createSupplierRequest = createAsyncThunk(
    'suppliers/create',
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('at')
            const { data } = await suppliersAdminApi.post(`/create`, payload, {
                headers: { Authorization: `Bearer ${token}` },
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

export const updateSupplierRequest = createAsyncThunk(
    'suppliers/update',
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('at')
            const { data } = await suppliersAdminApi.put(`/update`, payload, {
                headers: { Authorization: `Bearer ${token}` },
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

const initialState = {
    suppliers: [],
    status: 'idle',
    error: null,
}

const supplierSlice = createSlice({
    name: 'suppliers',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchAllsuppliers.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(fetchAllsuppliers.fulfilled, (state, action) => {
                state.status = 'succeded'
                const payload = action.payload
                state.suppliers = payload
                console.log({ payload })
            })

            .addCase(fetchAllsuppliers.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
                console.log(action.error.message)
            })
            .addCase(createSupplierRequest.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(createSupplierRequest.fulfilled, (state) => {
                state.status = 'succeded'
                state.status = 'idle'
            })

            .addCase(createSupplierRequest.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })

            .addCase(updateSupplier.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(updateSupplier.fulfilled, (state) => {
                state.status = 'succeded'
                state.status = 'idle'
            })

            .addCase(updateSupplier.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    },
})

export const selectAllSuppliers = (state) => state.suppliers?.suppliers
export const selectsuppliersStatus = (state) => state.suppliers.status
export const selectsuppliersError = (state) => state.suppliers.error
export const selectOneSupplierById = (state, id) =>
    state.suppliers.suppliers.find((item) => item.item_id === id)
export default supplierSlice.reducer
