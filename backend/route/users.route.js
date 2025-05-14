
import {Router}from "express"
import { registerusercontroller,loginController,testController, uploadAvatar,logoutController,updateUserDetails,userDetails} from "../controllers/authcontroller.js" 
import auth from "../middlewears/auth.js"
import upload from "../middlewears/multer.js";
//import { requireSignIn } from "../middlewears/authMiddlewears.js";
const router=Router();
//ROUTING
//REGISTER||METHOD POST
router.post('/register',registerusercontroller)
//LOGIN || METHOD POST
router.post("/login",loginController)
//test routes
router.get("/test",testController)
//image userprofile
router.put("/upload-avatar",upload.single("avatar"),uploadAvatar)
//logout routes
router.post("/logout",auth,logoutController)
//updateUserDetails routes
router.put("/update-user",auth,updateUserDetails)

router.get("/user-details",auth,userDetails)


export default router 
