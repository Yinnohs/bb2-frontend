import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[{
        user_id:1,
        name: "sexy admin",
        surname: "really sexy admin",
        email: "admin@admin.com",
        roles:[{
            role_id:1,
            role:  "ADMIN"
        }]

    }],
    status:'idle',
    error: null
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser:{
            reducer(state, action){
                state.users.push(action.payload)
            },
            prepare(name, surname = '', email){
                return{
                    payload:{
                        user_id:2,
                        name,
                        surname,
                        email,
                        roles:[{
                            role_id:2,
                            role: "CLIENT"
                        }]
                    }
                }
            }
        }
    }
})

export const selectAllUser = (state) => state.users.users
export const  {addUser}  = userSlice.actions
export default userSlice