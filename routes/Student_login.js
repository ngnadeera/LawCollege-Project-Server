const express = require("express");
const router = express.Router();
const { Student_login, Student_personal_details } = require("../models");
const cookieParser = require("cookie-parser");
const {createToken} = require('../utils/JWT')
const {validateToken} = require('../middlewares/AuthMiddlewear')
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen')



const sendEmail = async (NameInFull,Email,RegNo,password) => {

    const userEmail = Email

  try {
    const transporter = nodemailer.createTransport({
      // Replace these options with your actual email service configuration
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'legalinstitutesrilanka@gmail.com',
        pass: 'rbrotlrpfsdizxwy',
      },
    });

    const MailGenerator = new Mailgen({
      theme: "default",
      product  : {
        name: "Law College Srilanka",
        link : 'https://mailgen.js/'
      }
    })

    let response = {
      body: {
        name : NameInFull, //add applicant name here
        intro: "Welcome to the Law College Sri Lanka web portal! We are delighted to have you as a part of our community. Your auto-generated username and password have been securely generated to provide you with easy access to your user account.To get started, please use the provided username and password to log in to your account.  It is highly recommended to change your password after a successful login" ,
        table : {
          data : [
            {
              item: "Username", 
              description: "Username for the Student Login",
              content: RegNo, //Add username here
            },
            {
              item: "Password", 
              description: "Password for the Student Login",
              content: password, //Add username here
            }
          ]
        },
        outro: "looking forward!"
      }

    }

    let mail = MailGenerator.generate(response);

    let message = {
      from : 'legalinstitutesrilanka@gmail.com',
      to : userEmail,
      subject : 'Student Login Portal Username and Password',
      html : mail
    }

   transporter.sendMail(message).then(() => {
    return 
   }).catch(error => {
    return
   }) ;

 
    
  } catch (error) {
    console.error('Error sending email:', error);
  }
};



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


router.post("/email", async (req, res) => {
  try {
    sendEmail(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the records" });
  }
});




router.get("/userId", validateToken, async (req, res) => {
  try {
    const RegNo = req.user.RegNo;
    res.json(RegNo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/", async (req, res) => {
  try {
    const { values } = req.body;
    if (values === "yes") {
      const personalDetails = await Student_personal_details.findAll();
      const existingLogins = await Student_login.findAll({
        attributes: ["RegNo"],
      });
      const existingUsernames = existingLogins.map((login) => login.RegNo);

      const studentLogins = [];

      for (const detail of personalDetails) {
        const { RegNo,Email,NameInFull } = detail;

        if (!existingUsernames.includes(RegNo)) {
          const password = generateRandomPassword();
          studentLogins.push({
            RegNo,
            password,
          });

          // Sending email for each student
            password,
          await sendEmail(NameInFull,Email,RegNo,password);
        }
      }

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
    const { RegNo, password } = req.body;
  
    const user = await Student_login.findOne({ where: { RegNo: RegNo } });
  
    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }
  
    const isPasswordMatch = await bcrypt.compare(password, user.password) || password === user.password;

    if (isPasswordMatch) {

      const accessToken = createToken(user)
      res.json(accessToken)

      
    } else {
      return res.json({ error: "Wrong Username and Password Combination" });
    }
  });

  router.get('/auth', validateToken , (req,res) => {
    res.json(req.body)
  });



  router.post("/change-password", validateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const RegNo = req.user.RegNo;
  

  const user = await Student_login.findOne({
    where: { RegNo: RegNo }
  });

  if (!user) {
    return res.json({ error: "User not found" });
  }

  const isPasswordMatch = await bcrypt.compare(currentPassword, user.password) || currentPassword == user.password;

  if (!isPasswordMatch) {
    return res.json({ error: "Current password is incorrect" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await Student_login.update(
    { password: hashedPassword },
    { where: { RegNo: RegNo } }
);

  return res.json({ message: "Password changed successfully" });
});


  

module.exports = router;