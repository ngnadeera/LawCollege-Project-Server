const express = require("express");
const router = express.Router();
const { Entrance_exam_date_time } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listofExamCenter = await Entrance_exam_date_time.findAll();
    res.json(listofExamCenter);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrive records" });
  }
});

router.post("/", async (req, res) => {
  const postData = req.body;
  try {
    const createdRecord = await Entrance_exam_date_time.create(postData);
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

router.get("/1", async (req, res) => {
  try {
    const ExamCenter = await Entrance_exam_date_time.findByPk(1);
    if (ExamCenter) {
      res.json(ExamCenter);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});

router.put("/1", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const ExamCenter = await Entrance_exam_date_time.findByPk(1);
    if (ExamCenter) {
      await ExamCenter.update(updatedData);
      res.json(ExamCenter);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update the record" });
  }
});

module.exports = router;
