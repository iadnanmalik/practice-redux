import {createSlice}  from "@reduxjs/toolkit";


const initialState = {
    value : {
        name: "",
        age: 0,
        email: ""
    }
}

export const usersSlice = createSlice({
    name: "user",
    initialState : {
        value : {
            name: "",
            age: 0,
            email: ""
        }
    },
    reducers:{
        login: (state, action ) => {
            state.value = action.payload
        },
        logout : (state ) => {
            state.value = initialState
        }
    }
})

export const { login , logout} = usersSlice.actions

export default usersSlice.reducer