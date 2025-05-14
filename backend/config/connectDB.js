import mongoose from "mongoose"
import donenv from "dotenv"
donenv.config()
//if(process.env.MONGODB_URI){
    //throw new error(
      //  "please provide MONGODB_URI in the .env file"
  //  )
// }
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect db")
    }catch(error){
        console.log("mongodb connect error",error)
        process.exit(1)
    }
}
export default connectDB