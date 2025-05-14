import mongoose from  "mongoose"
const addressSchema=new mongoose.Schema({
    address_linf : {
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""

    },
    state:{
        type:String,
        default:""

    },
    pincode : {
        type:String,
        Default:""

    },

    country:{
        type:String,
        default:""
    },
    mobile :{
        type:number,
        default:""
    },
    status:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true
})
const AddressModel=mongoose.model("address",addressSchema)
export default AddressModel