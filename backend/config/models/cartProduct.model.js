import mongoose from "mongoose";
const cartProductSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:"product"
    },
    quantity:{
        type:String,
        default:1
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"customer"
    },
},{
    timestamps:true
})
const cartProductModel=mongoose.model("cartProduct",cartProductSchema)
export default cartProductModel