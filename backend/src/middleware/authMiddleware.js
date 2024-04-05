const jwt = require('jsonwebtoken');
function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(403).json({
            'success':false,
            'message':'Invalid token'
        });
    }
    const token = req.headers.authorization.split(' ')[1];
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        req.headers.userId = payload.userid;
        next();
    }
    catch(e){
        return res.status(403).json({
            'success':false,
            'message':'Invalid token'
        });
    }

}
module.exports = authMiddleware