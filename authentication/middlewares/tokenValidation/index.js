const jwt = require('jsonwebtoken');
const validateToken=(req,res,next)=>{
    //console.log("req:",req);
    console.log("validating token.");
    const token = req.body.token || req.headers.authorization;
    console.log("val token",token);
    //let resu= false;
    // decode token
    if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'todo-app-super-shared-secret', function(err, decoded) {   
        if (err) {
            console.log("failed to authorize token");
            res.status(200).json({message:"Invalid token"});
            //return res.json({ success: false, message: 'Failed to authenticate token.' });     
        } else {
            // if everything is good, save to request for use in other routes
            //req.decoded = decoded;     
            console.log("decoded:",decoded);
            //next();
            //resu=true;
            res.send({message:"valid token"});
            //res.status(200).json({message:"valid token"});
            
            
        }
    });

  }
}
module.exports=validateToken;