const express=require("express")
const app=express()
const port=3000
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.post("/submit-Form",(req,res)=>{
    res.status(200)
    const{name,email,phnNo}=req.body
    console.log("Name received:",name)
    console.log("email received:",email)
    console.log("Phone Number received:",phnNo)
    res.json({Name:`${name}`,Email:`${email}`,MobNumber:`${phnNo}`})
})
app.listen(port,()=>{
    console.log(`server running at port:${port}`)
})