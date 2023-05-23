import { createSlice } from "@reduxjs/toolkit";

const authSlise=createSlice({
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{
        setUsers(state,action){
            state.users=action.payload
            console.log(state.users);
        },
        addUser(state,action){
            state.users.push(action.payload);
        },
        deleteUser(state,action){
            state.users=state.users.filter((user)=>user.id!==action.payload)
        }
    }
});
export const {setUsers,deleteUser,addUser}=authSlise.actions
export default authSlise.reducer