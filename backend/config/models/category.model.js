import mongoose from "mongoose"
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        default:null,
    },
    image:{
        type:String,
        default:""
    },
},{
    timestamps:true
})
const categoryModel=mongoose.model("category",categorySchema)
export default categoryModel