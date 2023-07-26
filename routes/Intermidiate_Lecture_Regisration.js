const express = require("express");
const router = express.Router();
const { Intermidiate_Lecture_Regisration } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddlewear')

router.get("/", async (req, res) => {
  const listOfpayment = await Intermidiate_Lecture_Regisration.findAll();
  res.json(listOfpayment);
});

router.post("/", validateToken,  async (req, res) => {
  const id = req.user.RegNo
  const postData = req.body;
  try {
    const createdRecord = await Intermidiate_Lecture_Regisration.create({RegNo:id,PaymentVerification:false,EligibilityVerification:false, ...postData});
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const payment = await Intermidiate_Lecture_Regisration.findByPk(id);

//       res.json(payment);
  
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve the record" });
//   }
// });



router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const payment = await Intermidiate_Lecture_Regisration.findByPk(id);
    if (payment) {
      await payment.update(updatedData);
      res.json(payment);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update the record" });
  }
});

router.get("/user",validateToken, async (req, res) => {
  const id = req.user.RegNo
  try {
    const payment = await Intermidiate_Lecture_Regisration.findByPk(id);
    res.json(payment);
 
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});

module.exports = router;
