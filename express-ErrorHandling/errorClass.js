class ErrorClass extends Error{
    constructor(message,statusCode){
    super(message);
    this.statusCode=statusCode;
    if(`${statusCode}`.startsWith('4')){
        this.status="Fail";
    }
    else{
        this.status="Error";
    }
    this.isOperational=true
    Error.captureStackTrace(this,this.constructor)
   }
}
const express=require("express")
const app=express();
const port=3000
app.get("/error",(req,res,next)=>
{   
    next(new ErrorClass(`couldn't find ${req.originalUrl} on server`,404))
})
app.use((error,req,res,next)=>{
    const statusCode=error.statusCode||500
    console.log(error)
    res.status(statusCode)
    res.json({status:statusCode,message:error.message})
})
app.listen(port ,()=>{
    console.log(`server running on port:${port}`)
})


