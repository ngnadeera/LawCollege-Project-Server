const express = require("express");
const router = express.Router();
const { Preliminary_Lecture_Regisration } = require("../models");

router.get("/", async (req, res) => {
  const listOfpayment = await Preliminary_Lecture_Regisration.findAll();
  res.json(listOfpayment);
});

router.post("/", async (req, res) => {
  const postData = req.body;
  try {
    const createdRecord = await Preliminary_Lecture_Regisration.create(postData);
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const payment = await Preliminary_Lecture_Regisration.findByPk(id);
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const payment = await Preliminary_Lecture_Regisration.findByPk(id);
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
