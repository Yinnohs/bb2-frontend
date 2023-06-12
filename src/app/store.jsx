import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authslice'
import userSlice from '../features/users/usersSlice'
import itemsReducer from '../features/items/itemsSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userSlice,
        items: itemsReducer,
    },
})
