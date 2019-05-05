const jwt = require('jsonwebtoken');
const auth= (req, res) =>{
    console.log("api/auth");
    const body = req.body;
    console.log("body:",body);
    /*const user = USERS.find(user => user.username == body.username);
    if(!user || body.password != 'todo') return res.sendStatus(401);*/
    if(body.username=='admin' && body.password=='admin'){
        //console.log("success if");
        let token = jwt.sign({userID: 1}, 'todo-app-super-shared-secret', {expiresIn: '5m'});
        console.log("send token:",token)
        res.send({token});
    }
    else{
        console.log("else error");
        res.sendStatus(401);
    }
  };
module.exports = auth;