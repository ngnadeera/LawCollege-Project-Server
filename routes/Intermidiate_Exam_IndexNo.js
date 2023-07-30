const express = require("express");
const router = express.Router();
const { Intermidiate_exam_IndexNo } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddlewear')


// router.get("/", async (req, res) => {
//   const listOfpayment = await Intermidiate_exam_IndexNo.findAll();
//   res.json(listOfpayment);
// });

router.post("/",validateToken, async (req, res) => {
  const id = req.user.RegNo;
  const postData = req.body;

  const createdRecord = await Intermidiate_exam_IndexNo.create({
    RegNo: id,
    ...postData
  });
    res.json(createdRecord);
  
});


router.get("/user",validateToken, async (req, res) => {
  const id = req.user.RegNo
  try {
    
    const payment = await Intermidiate_exam_IndexNo.findOne({
      where: { RegNo : id} 
    });
    if(payment){
        res.json(payment);
    } else {
        res.json(false)
    }
     

  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const payment = await Intermidiate_exam_IndexNo.findOne({
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
    const payment = await Intermidiate_exam_IndexNo.findOne({
      where: { IndexNo: id },
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
