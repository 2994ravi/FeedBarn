import mongoose from "mongoose"
const productSchema=new mongoose.Schema ({
    name:{
        type : String,
        default:null,
    },
    image:{
        type:Array,
        default:[]
    },
    categoryId:[{
        type:mongoose.Schema.ObjectId,
        ref:"category",
    }],
    sub_category:[{
        type:mongoose.Schema.ObjectId,
        ref:sub_category,
    }],
    unit:{
        typr:String,
    },
    stock:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        default:0
    },
    discount:{
        type:Number,
        default:0
    },
    description:{
        type:String,
    },
    more_details:{
        type:Object,
        default:{}
    },
    publish:{
        type:Boolean,
        default:true
    },
},{
    timestamps:true
})
const productModel=mongoose.model("product",productSchema)
export default productModel