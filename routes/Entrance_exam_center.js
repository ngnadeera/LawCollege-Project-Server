const express = require("express");
const router = express.Router();
const { Entrance_exam_center } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listofExamCenter = await Entrance_exam_center.findAll();
    res.json(listofExamCenter);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrive records" });
  }
});

router.post("/", async (req, res) => {
  const postData = req.body;
  try {
    const createdRecord = await Entrance_exam_center.create(postData);
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const ExamCenter = await Entrance_exam_center.findByPk(id);
    if (ExamCenter) {
      res.json(ExamCenter);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRecord = await Entrance_exam_center.destroy({
      where: { CenterID: id },
    });
    if (deletedRecord) {
      res.json({ message: "Record deleted successfully" });
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the record" });
  }
});

module.exports = router;
