const express = require("express");
const router = express.Router();
const { Student_login, GEA_personal_details } = require("../models");
const cookieParser = require("cookie-parser");
const {createToken} = require('../utils/JWT')
const {validateToken} = require('../middlewares/AuthMiddlewear')


const generateRandomPassword = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  const length = 8;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

router.get("/", async (req, res) => {
  try {
    const listOfStudentLogin = await Student_login.findAll();
    res.json(listOfStudentLogin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving the data" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { values } = req.body;
    if (values === "yes") {
      const personalDetails = await GEA_personal_details.findAll();

      const existingLogins = await Student_login.findAll({
        attributes: ["username", "StudentID"],
      });
      const existingUsernames = existingLogins.map((login) => login.username);
      const existingStudentIDs = existingLogins.map((login) => login.StudentID);

      const studentLogins = personalDetails.reduce((logins, detail) => {
        const { GEApplicantID, NIC } = detail;

        if (!existingUsernames.includes(NIC) && !existingStudentIDs.includes(GEApplicantID)) {
          const password = generateRandomPassword();

          logins.push({
            username: NIC,
            password,
            StudentID: GEApplicantID,
          });
        }

        return logins;
      }, []);

      if (studentLogins.length > 0) {
        await Student_login.bulkCreate(studentLogins);
        res.json(studentLogins);
      } else {
        res.json("No new records created");
      }
    } else {
      res.json("No action performed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the records" });
  }
});


router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await Student_login.findOne({ where: { username: username } });
  
    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }
  
    if (password === user.password) {

      const accessToken = createToken(user)
      res.json(accessToken)

      
    } else {
      return res.json({ error: "Wrong Username and Password Combination" });
    }
  });

  router.get('/auth', validateToken , (req,res) => {
    res.json(req.body)
  });

  

module.exports = router;