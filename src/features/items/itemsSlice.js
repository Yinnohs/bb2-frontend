import { createSlice } from "@reduxjs/toolkit"

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
            prepare(itemCode, description, price, userId){
                return{
                    payload:{
                        itemcode: itemCode,
                        description: description,
                        price: price,
                        creator_id: userId
                    }
                }
            }   
        },

        deleteItem(state, action){
            const {itemId} = action.payload
            state.items = state.items.filter((item)=> item.id !== itemId)
        },

        addNewSupplier(state, action){
            const {newSuppliers, itemId} = action.payload
            const currentItem = state.items.find((item)=> item.id === itemId)
            if(currentItem){
                currentItem.suppliers.push(... newSuppliers);
            }
        },

        addNewPriceReduction(state,action){
            const {newPriceReduction, itemId} = action.payload
            const currentItem = state.items.find((item)=> item.id === itemId)
            if(currentItem){
                currentItem.price_reductions.push(...newPriceReduction)
            }
        }
    }
})

export const selectAllItems = (state) => state.items.items
export const {itemAdded, deleteItem, addNewSupplier, addNewPriceReduction } = itemSlice.actions
export default  itemSlice.reducer