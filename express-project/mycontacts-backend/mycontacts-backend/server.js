const express=require("express")
require("dotenv").config()
const connectDb=require("./config/dbConnection")
connectDb()
const app=express()
const port=process.env.PORT||5001
const contactRoutes=require("./routes/contactRoutes")
const errorHandler=require("./middlewares/errorHandler")
app.use(express.json())
app.use("/contacts",contactRoutes)
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})