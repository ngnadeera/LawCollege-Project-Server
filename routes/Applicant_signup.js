const express = require("express");
const router = express.Router();
const { Applicant_signup } = require("../models");
const bcrypt = require("bcrypt");
const { Op } = require('sequelize');
const {createToken} = require('../utils/JWTApplicant')
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");


router.post("/", async (req, res) => {
  try {

    const { username, password, email } = req.body;

    const user = await Applicant_signup.findOne({ where: {
      [Op.or]: [
        { Username: username }, 
        { Email: email }, 
      ],
    }, });
    
    if (user){
      return res.json({error:"User already exist!"})
    } else{

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const createdUser = await Applicant_signup.create({
      Username: username,
      Password: hashedPassword,
      Email: email
    });
    
    return res.json("success!");
  }
  } catch (error) {
    console.error(error);
    res.status(500).json("An error occurred. Please try again.");
  }
});


router.post("/login", validateToken,  async (req, res) => {
    const { username, password } = req.body;
  
    const user = await Applicant_signup.findOne({ where: {
        [Op.or]: [
          { Username: username }, 
          { Email: username }, 
        ],
      }, });
  
    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }
  
    bcrypt.compare(password, user.Password).then((match)=> {
        if (!match) {
          res.json({ error: "Wrong Username and Password Combination" })
        } else {

          const accessTokenApplicant = createToken(user)
          res.json(accessTokenApplicant)
        }
        
    });
  });

  router.get('/login', validateToken , (req,res) => {
    res.json(req.body)
  });



module.exports = router;
