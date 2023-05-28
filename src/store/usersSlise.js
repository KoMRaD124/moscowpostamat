import { createSlice } from "@reduxjs/toolkit";

const authSlise=createSlice({
    name:"users",
    initialState:{
        users:[],
        SuccesfullisActive:false,
        ErrorisActive:false,
        UserDel:false,
        UserDelSuccesfull:false,
        delEmail:""
    },
    reducers:{
        setUsers(state,action){
            state.users=action.payload
           
        },
        addUser(state,action){
            state.users.push(action.payload);
            state.SuccesfullisActive=true;
        },
        deleteUser(state,action){
            state.users=state.users.filter((user)=>user.id!==action.payload.id)
            state.delEmail=action.payload.email
            state.userDel=true
        },
        closeModal(state){
            state.SuccesfullisActive=false;
            state.ErrorisActive=false;
            state.UserDel=false
            state.UserDelSuccesfull=false

        },
        setDelSuccesfull(state){
            state.UserDelSuccesfull=true
          
        },
        openError(state){
            state.ErrorisActive=true
        }

    }
});
export const {setUsers,deleteUser,addUser,openError,closeModal,setDelSuccesfull}=authSlise.actions
export default authSlise.reducer