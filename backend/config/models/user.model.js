import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    name : {
        type :String,
        required : [true,"provide name"] 
       },
    email : {
        type : String,
        required : [true,"provide email"]
    },
    password : {
        type : String,
        required : [true,"provide password"]
    },

    ph_no : {
        type :Number,
        default: null

    },
    avatar:{
        type:String,
        default:""
    },
    refresh_token : {
        type : String,
        default : null
    },
    verify_email : {
        type : Boolean,
        default : false
    },
    last_login_date : {
        type : Date,
        default:null

    },
    status : {
        type : String,
        enum: ["Active","Inactive","Suspended"],
        default:"Active"

    },
    Address_details:[{
        type:mongoose.Schema.ObjectId,
        ref:"address"  

    }],
    shopping_cart:[{
        type:mongoose.Schema.ObjectId,
        ref:"cartProduct"  

    }],
    orderHistory:[{
        type:mongoose.Schema.ObjectId,
        ref:"order"  

    }],
    forget_password_otp:{
        type:String,
        default:null,
    },
    forget_password_expiry:{
        type:Date,
        default:null
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"

    }

},{
    timestamps:true

})

const userModel=mongoose.model("user",userSchema)
export default userModel