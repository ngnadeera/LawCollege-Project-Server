const { sign,verify } = require("jsonwebtoken")

const createToken = (user) => {
    
   const accessToken = sign(
    {Username: user.Username, id: user.id},
    "jwtsecretToken"
   );

   return accessToken;
};


module.exports = { createToken};