import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    items:[{
        item_id:1,
        item_code: 1234,
        description: "boilerplate item",
        price: 12.2,
        item_state: "ACTIVE",
        creator:{
                user_id:1,
                name: "sexy admin",
                surname: "really sexy admin",
                email: "admin@admin.com",
            },
        suppliers:[],
        price_reductions: []
    }],
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
    }
})

export const selectAllItems = (state) => state.items.items
export const selectOneItemById = (state, id) => state.items.items.find((item)=> item.item_id === id)

export const {itemAdded, itemAddedPriceReduction, itemSupplierAdded, itemDeleted } = itemSlice.actions
export default  itemSlice.reducer