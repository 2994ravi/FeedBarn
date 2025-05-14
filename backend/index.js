import express, { response } from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import cookieparser from "cookie-parser"
import morgan from "morgan"
import helmet from "helmet"
import connectBD from "./config/connectDB.js"
import router from "./route/users.route.js"




const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))


//middlewear
app.use(express.json())
app.use(cookieparser())
app.use(morgan("combined"))
app.use(helmet({
    crossOriginEmbedderPolicy : false
}))
const PORT = process.env.PORT ||8080
app.get("/",(request,response)=>{
    ///server to client
    response.json({
        message : "server is running"+ PORT
    })
})
app.use("/api/customer",router)
connectBD().then(()=>{
    app.listen(PORT,()=> 
        console.log("server is running",PORT))
    
    }) 


