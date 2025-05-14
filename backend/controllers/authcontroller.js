import sendEmail from "../config/sendemail.js"
import userModel from "../config/models/user.model.js";
import verifyemailTemplet from "../utils/verifyemailTemplet.js"
import {comparePassword,hashPassword} from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import dotenv from "dotenv"
import uploadimageCloudunary from "../utils/uploadimageCloudinary.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken";
import { response } from "express";
dotenv.config();

/*#############################################CODE###############################################*/

//user registration
export async function registerusercontroller(request,response){
    try{
        const{name,email,password}=request.body  
        if(!name||!email||!password){
            return response.status(400).json({
            message :"provide email,name,password",
            error:true,
            success:false
            })
        }
        const customer =await userModel.findOne({email})
        if (customer){
            return response.json({
                message:"already registered email",
                error:true,
                success:false

            })
        }
        const hashedPassword=await hashPassword(password)
 //save
        const user=new userModel({ name,email,password:hashedPassword}).save()
        
        const newUser=new userModel({name,email,password:hashedPassword});
        const save=await newUser.save()
        const verifyEmailUrl=`${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

        const verifyemail =await sendEmail({
            sendTO:email,
            subject:"verify email from THE FEED BARN",
            htmL:verifyemailTemplet({
                name,
                url:verifyEmailUrl
            })



        })
        return response.json({
            message:"user registered successfully",
            error:false,
            success:true,
            date:save
        })





    }
    catch(error){
        return response.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
};

//user login

export const  loginController=async(request,response) => {
    try{
        const{email,password}=request.body
        //validation 
        if (!email || !password){
            return response.status(404).send({
                success:false,
                message:"invalid email or password"

            })
        }
        //check user
        const user = await userModel.findOne({email})
        if (!user){
            return response.status(404).json({
                    message:"email is not registered",
                    error:true,
                    success:false

                })
        }
        const match =await comparePassword(password,user.password)
        if (!match){
            return response.status(200).send({
                success:false,
                message:"password is incorrect"
            })
        }
        
        //token
        const accesstoken= await generatedAccessToken(user._id)
        const refreshtoken= await generatedRefreshToken(user._id)
        const cookiesOption ={
            httpOnly:true,
            secure:true,
            sameSite:"None"

        }
        response.cookie("accessToken",accesstoken,cookiesOption)
        response.cookie("refreshToken",refreshtoken,cookiesOption)
        const token = JWT.sign({ _id:user._id},process.env.JWT_SECRET,{expiresIn:"15d"});
        return response.json({
            message:"login successfully",
            success:true,
            error:false,
            user:{
                accesstoken,
                refreshtoken
            },
    
        });

    }catch(error){
        console.error("login error",error.message,error.stack);

        response.status(500).send({
            success:false,
            message:"error in login",
            error:error.message
        })

    }
};

//test controller
export const testController=(req,res) =>{
    res.send("protected route")

};

//upload user avatar
export async function uploadAvatar(request,response){
    try {
        const image=request.file
        const upload= await uploadimageCloudunary(image)
        return response.json({
            message :"upload profile",
            data:upload
        })
    } catch (error) {
        return response.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
        
    }
    
};

//logout controller
export async function logoutController(response,request) {
    try {

        const cookiesOption ={
            httpOnly:true,
            secure:true,
            sameSite:"None"

        }
        response.clearCookie("accesstoken",cookiesOption)
        response.clearCookie("refreshtoken",cookiesOption)
        return response.json({
            messgage:"logout successfully",
            error:false,
            success:true,
        })
        
    } catch (error) {
        return response.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
        
    }
    
};

//update user details 
export async function updateUserDetails(request,response){
    try {
        const userId=request.userId//auth middlewear
        const {name,email, ph_no,password}=request.body

        const updateUser=await userModel.findByIdAndUpdate(userId,{
            ...(name&&{name: name}),
            ...(email&&{email: email}),
            ...(ph_no&&{ph_no: ph_no}),
            ...(password&&{password: password})

        })
        return response.json({
            message:"updated user successfully",
            error:false,
            success:true,
            date:updateUser

        })
    } catch (error) {
        return response.status(500)({
                message:error.message|| error,
                success:false,
                error:true
        })
        
    }
    
};
//get login user details
export async function userDetails(request,response){
    try {
        const userId  = request.userId

        console.log(userId)

        const user = await UserModel.findById(userId).select('-password -refresh_token')

        return response.json({
            message : 'user details',
            data : user,
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : "Something is wrong",
            error : true,
            success : false
        })
    }
}