const {verify} = require("jsonwebtoken")


const validateToken = (req, res, next) => {
    const accessTokenApplicant = req.header("accessTokenApplicant");

    if(!accessTokenApplicant){
        return res.status(400).json({ error: "User not Authenticated!"});
    }

    try { 
        const validToken = verify(accessTokenApplicant,"jwtsecretToken");
        req.user = validToken;
        if (validToken) {
            return next()
        }
    } catch (err){
        return res.status(400).json({ error:err })
    }
}

module.exports = { validateToken } 