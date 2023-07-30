const express = require("express");
const router = express.Router();
const { Intermidiate_exam_admission } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddlewear')


router.get("/", async (req, res) => {
  const listOfpayment = await Intermidiate_exam_admission.findAll();
  res.json(listOfpayment);
});

router.post("/",validateToken, async (req, res) => {
  const id = req.user.RegNo;
  const postData = req.body;

  const createdRecord = await Intermidiate_exam_admission.create({
    RegNo: id,
    ...postData
  });
    res.json(createdRecord);
  
});


router.get("/:index",validateToken, async (req, res) => {
  const id = req.user.RegNo
  const index = req.params.index;
  try {
    const payment = await Intermidiate_exam_admission.findAll({
      where: { indexNo : index} 
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
    const payment = await Intermidiate_exam_admission.findOne({
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

router.delete("/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  
  try {
    const payment = await Intermidiate_exam_admission.findOne({
      where: { RegNo: id },
    });

    if (payment) {
      // Delete the record
      await payment.destroy();
      res.json({ message: "Record deleted successfully" });
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the record" });
  }
});


module.exports = router;
