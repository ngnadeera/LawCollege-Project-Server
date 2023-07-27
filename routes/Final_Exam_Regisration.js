const express = require("express");
const router = express.Router();
const { Final_Exam_Regisration } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddlewear')



router.get("/", async (req, res) => {
  const listOfpayment = await Final_Exam_Regisration.findAll();
  res.json(listOfpayment);
});

router.post("/",validateToken, async (req, res) => {
  const id = req.user.RegNo;
  const postData = req.body;

  const createdRecord = await Final_Exam_Regisration.create({
    RegNo: id,
    PaymentVerification: 'pending',
    ...postData
  });
    res.json(createdRecord);
  
});

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const payment = await Final_Exam_Regisration.findOne({
//       where: { RegNo: id },
//     });
//     if (payment) {
//       res.json(payment);
//     } else {
//       res.status(404).json({ error: "Record not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve the record" });
//   }
// });


router.get("/user",validateToken, async (req, res) => {
  const id = req.user.RegNo
  try {
    const payment = await Final_Exam_Regisration.findOne({
      where: { RegNo : id} 
    });

      res.json(payment);
  
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const payment = await Final_Exam_Regisration.findOne({
      where: { RegNo: id },
    });
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

module.exports = router;
