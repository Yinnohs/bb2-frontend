import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../baseApi"
import axios from "axios"

const itemsAPi = axios.create({baseURL:`${baseUrl}/item`})

export const fetchAllItems = createAsyncThunk('items/fetchAllItems', async ()=>{
    try {
        const {data} = await itemsAPi.get("/all")
        return data
    } catch (error) {
        return error.message
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
                        item_state: "ACTIVE",
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
            state.items.concat(loadedItems)
        })

        .addCase(fetchAllItems.rejected, (state, action)=>{
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