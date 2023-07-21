const {verify} = require("jsonwebtoken")


const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if(!accessToken){
        return res.status(400).json({ error: "User not Authenticated!"});
    }

    try { 
        const validToken = verify(accessToken,"jwtToken")
        req.user = validToken;
        if (validToken) {
            return next()
        }
    } catch (err){
        return res.status(400).json({ error:err })
    }
}

module.exports = { validateToken} 