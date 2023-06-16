import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from '../baseApi'
import axios from 'axios'

const priceReductionsApi = axios.create({
    baseURL: `${baseUrl}/price-reduction`,
})
const priceReductionsAdminApi = axios.create({
    baseURL: `${baseUrl}/admin/discount`,
})

export const fetchAllpriceReductions = createAsyncThunk(
    'priceReductions/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('at')
            const { data } = await priceReductionsApi.get(`/all`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

export const createPriceReductionRequest = createAsyncThunk(
    'priceReductions/create',
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('at')
            const { data } = await priceReductionsAdminApi.post(
                `/create`,
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

export const updatePriceReductionRequest = createAsyncThunk(
    'priceReductions/update',
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('at')
            const { data } = await priceReductionsAdminApi.put(
                `/update`,
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

export const deletePriceReductionRequest = createAsyncThunk(
    'priceReductions/delete',
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('at')
            const { data } = await priceReductionsAdminApi.delete(
                `/delete/${payload}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

const initialState = {
    priceReductions: [],
    status: 'idle',
    error: null,
}

const priceReductionslice = createSlice({
    name: 'priceReductions',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchAllpriceReductions.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(fetchAllpriceReductions.fulfilled, (state, action) => {
                state.status = 'succeded'
                const payload = action.payload
                state.priceReductions = payload
            })

            .addCase(fetchAllpriceReductions.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
            .addCase(createPriceReductionRequest.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(createPriceReductionRequest.fulfilled, (state) => {
                state.status = 'succeded'
                state.status = 'idle'
            })

            .addCase(createPriceReductionRequest.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })

            .addCase(updatePriceReductionRequest.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(updatePriceReductionRequest.fulfilled, (state) => {
                state.status = 'succeded'
                state.status = 'idle'
            })

            .addCase(updatePriceReductionRequest.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
            .addCase(deletePriceReductionRequest.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(deletePriceReductionRequest.fulfilled, (state) => {
                state.status = 'succeded'
                state.status = 'idle'
            })

            .addCase(deletePriceReductionRequest.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    },
})

export const selectAllpriceReductions = (state) =>
    state.priceReductions.priceReductions
export const selectPriceReductionstatus = (state) =>
    state.priceReductions.status
export const selectPriceReductionsError = (state) => state.priceReductions.error
export const selectOneItemById = (state, id) =>
    state.priceReductions.priceReductions.find((item) => item.item_id === id)
export default priceReductionslice.reducer
