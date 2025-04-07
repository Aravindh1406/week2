const {constants}=require("../constants")
const errorHandler=(error,req,res,next)=>{
    console.log(error)
    const statusCode=res.statusCode?res.statusCode:500
    res.status(statusCode);
    switch(statusCode){
        case constants.VALIDATION_ERROR:res.json({
            title:"Validation Failed",
            message:`${error.message}`,
            statusCode:`${statusCode}`,
            stackTrace:`${error.stack}`
            })
        break;
        case constants.UNAUTHORIZED:res.json({
            title:"Unauthorized",
            message:`${error.message}`,
            statusCode:`${statusCode}`,
            stackTrace:`${error.stack}`
            })
        break
            case constants.FORBIDDEN:res.json({
                title:"Forbidden",
                message:`${error.message}`,
                statusCode:`${statusCode}`,
                stackTrace:`${error.stack}`
            })
        break;
        case constants.NOT_FOUND:res.json({
            title:"Not Found",
            message:`${error.message}`,
            statusCode:`${statusCode}`,
            stackTrace:`${error.stack}`
        })
        case constants.INTERNAL_SERVER_ERROR:res.json({
            title:"Internal Server Error",
            message:`${error.message}`,
            statusCode:`${statusCode}`,
            stackTrace:`${error.stack}`
        })
        break;
        default:break;
    }
    
}
module.exports=errorHandler