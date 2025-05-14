import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    userid:[{
        type:mongoose.Schema.ObjectId,
        ref:"customer",
    }],
    orderid:{
        type:String,
        required:[true,"provide order ID"],
        unique:true
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:"product",
    },
    product_details:{
        type:String,
        image:[]
    },
    payment_id:{
        type:String,

    },
    payment_Status:{
        type:String,
        default:""
    },
    delivery_address:{
        type:mongoose.Schema.ObjectId,
        ref:"address"

    },
    delivery_status:{
        type:String,
        default:""
    },
    subtotalAmt:{
        type:Number,
        default:0
    },
    totalAmt:{
        type:Number,
        default:0
    },
    invoice_receipt:{
        type:String,
    },
},{
    timestamps:true
})
const orderModel=mongoose.model("order",orderSchema)
export default orderModel