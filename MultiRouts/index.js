const express=require("express")
const app=express()
const logMiddleWare=require("./Middleware/logging")
app.use(logMiddleWare)
const student=require("./data/students.json")
const normalget=require("./routes/normalget")
const getwithid=require("./routes/getwithid")
require("dotenv").config(); 
const port=process.env.PORT||5000
app.use("/students",normalget)
app.use("/students",getwithid)
app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})