import { response } from "express"
import jwt from "jsonwebtoken"
export const auth= async (request,response,next) => {
    try {
        const token=request.cookies.accesstoken || 
        request.header?.authorization?.split("")[1];  ///["bearer", "token"]
       if (!token){
        return response.status(401).json({
            message :"provide token"

        })
       }
       const decode =await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)
       if (!token){
        return response.status(402).json({
            message:"unaothorised access",
            errer:"true",
            success:"false"
        })
       }

       request.userId=decode.id
       next()
        
    } catch (error) {
        return response.status(500).json({
            message:error.message||message,
            error:true,
            success:false,
        })
        
    }

} 
export default auth