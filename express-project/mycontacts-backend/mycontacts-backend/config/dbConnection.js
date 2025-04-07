const mongoose=require("mongoose")
require("dotenv")
const connectDb=async()=>{
    try{
        const con=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DataBase Connected:")
        console.log("Host Name:",con.connection.host)
        console.log("Databse Name:",con.connection.name)
    }
    catch(err)
    {
        process.exit(1)
    }
}
module.exports=connectDb