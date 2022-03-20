const serverError = (err,req,res,next)=>{
 if(err.status){
   next()
 } else{
   res.status(500).json({msg:'server error'})
 }
 
};

module.exports = serverError;