import { createSlice } from "@reduxjs/toolkit";
const initialValue={
    _id : "",
    name : "",
    email : "",
    avatar : "",
    mobile : "",
    verify_email : "",
    status : "",
    address_details : [],
    shopping_cart : [],
    
}
const userSlice=createSlice({
    name:"user",
    initialState:initialValue,
    reducer:{
        setUserDetails:(state,action)=>{
            state._id = action.payload?._id
            state.name  = action.payload?.name
            state.email = action.payload?.email
            state.avatar = action.payload?.avatar
            state.mobile = action.payload?.mobile
            state.verify_email = action.payload?.verify_email
            state.status = action.payload?.status
            state.address_details = action.payload?.address_details
            state.shopping_cart = action.payload?.shopping_cart
            state.role = action.payload?.role
        }
    }

})
export const {setUserDetails}=userSlice.actions
export default userSlice.reducer