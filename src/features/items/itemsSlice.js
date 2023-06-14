import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../baseApi"
import axios from "axios"

const itemsAPi = axios.create({baseURL:`${baseUrl}/item`})


export const fetchAllItems = createAsyncThunk('items/fetch', async (state, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await itemsAPi.get(`/all?state=${state}`,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createItem = createAsyncThunk('items/create', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await itemsAPi.post(`/create`, payload ,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deactivateItem = createAsyncThunk('items/deactivate', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await itemsAPi.patch(`/deactivate`, payload ,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateItem = createAsyncThunk('items/update', async (payload, {rejectWithValue})=>{
    try {
        const token = localStorage.getItem('at')
        const {data} = await itemsAPi.post(`/create`, payload ,{
            headers:{Authorization:`Bearer ${token}`,
        }})
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})




const initialState= {
    items:[],
    status:'idle',
    error: null
}

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers:{
        itemAdded:{
            reducer(state, action){
                state.items.push(action.payload)
            },
            prepare(data, suppliers=[], priceReductions= [] ){
                return{
                    payload:{
                        item_id: data.item_id,
                        item_code: data.item_code,
                        description: data.description,
                        price: data.price,
                        item_state: "Active",
                        creator: data.creator,
                        suppliers,
                        price_reductions: priceReductions,
                    }
                }
            }   
        },

        itemDeleted: (state, action)=>{
            const {itemId} = action.payload
            state.items = state.items.filter((item)=> item.id !== itemId)
        },

        itemSupplierAdded: (state, action)=>{
            const {newSuppliers, itemId} = action.payload
            const currentItem = state.items.find((item)=> item.id === itemId)
            if(currentItem){
                currentItem.suppliers.push(...newSuppliers);
            }
        },

        itemAddedPriceReduction: (state,action)=>{
            const {newPriceReduction, itemId} = action.payload
            const currentItem = state.items.find((item)=> item.id === itemId)
            if(currentItem){
                currentItem.price_reductions.push(...newPriceReduction)
            }
        },
    },
    extraReducers(builder){
        builder
        .addCase(fetchAllItems.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(fetchAllItems.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const loadedItems = action.payload
            state.items = loadedItems
        })

        .addCase(fetchAllItems.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

        .addCase(createItem.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(createItem.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
            state.items.push(payload)
        })

        .addCase(createItem.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

        .addCase(deactivateItem.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(deactivateItem.fulfilled, (state,action)=>{
            state.status = 'idle'
            const payload = action.payload
            state.items = state.items.map((item)=>{

                if(item.item_id === payload.item_id){
                    item.item_state = "Discotinued"
                }
                return item
            })
        })

        .addCase(deactivateItem.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

        .addCase(updateItem.pending, (state)=>{
            state.status = 'loading'
        })

        .addCase(updateItem.fulfilled, (state,action)=>{
            state.status = 'succeded'
            const payload = action.payload
            state.items = state.items.map((item)=>{

                if(item.item_id === payload.item_id){
                    return payload
                }
                
                return item
            })
        })

        .addCase(updateItem.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })

    }
})

export const selectAllItems = (state) => state.items.items
export const selectItemStatus = (state)=> state.items.status
export const selectItemsError = (state)=> state.items.error
export const selectOneItemById = (state, id) => state.items.items.find((item)=> item.item_id === id)

export const {itemAdded, itemAddedPriceReduction, itemSupplierAdded, itemDeleted } = itemSlice.actions
export default  itemSlice.reducer