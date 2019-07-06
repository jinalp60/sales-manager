const request = require('request');
const config = require('config');
const authConfig = config.get('authentication.config');
const apigatewayConfig = config.get('api-gateway.config');

const validateToken=(req,res,next)=>{
    console.log("validation token");
    const token = req.body.token || req.headers.authorization;
    request.post({
        headers: {'content-type' : 'application/json'},
        url: 'http://'+apigatewayConfig.host+":"+apigatewayConfig.port+authConfig.baseUrl+"/tokenValidation",
        body: JSON.stringify({token})
    },(error,response,body)=>{
        body= JSON.parse(body);
        if(body.message==='valid token'){
            next();
        }else if(body.message==='Invalid token'){
            res.status(200).json({message:"Invalid token"});
        }else{
            res.status(200).json({message:"failed to authorize token"});
        }
    })
}
module.exports=validateToken;