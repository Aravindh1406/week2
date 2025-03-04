const express=require("express")
const app=express()
const port=3000
app.get("/error",(req,res,next)=>{
    const error=new Error("Something is Wrong")
    error.statusCode=404
    next(error)
    
    
})
const ErrorHandler=(error,req,res,next)=>{
    const statusCode=error.statusCode||500
    res.status(statusCode)
    console.log(error)
    res.json({status:statusCode,message:error.message})
    
}
app.use(ErrorHandler)
app.listen(port ,()=>{
    console.log(`server running on port:${port}`)
})