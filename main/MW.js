export const logMW = (req,res,next)=>{
    console.log(`${new Date().toLocaleDateString()}, ${req.method} ${req.url}`);
    next();
}
