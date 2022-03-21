const serverError = (err,req,res,next)=>{
 if(err.status){
   res.status(err.status).json({status:err.status,message:err.message})
 } else{
   res.status(500).json({status:500,massage:'server error'})
 }
 
};

module.exports = serverError;