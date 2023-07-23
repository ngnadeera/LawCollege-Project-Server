const express = require("express");
const router = express.Router();
const { Entrance_exam_results } = require("../models");


router.get("/", async (req, res) => {
  try {
    const listofResults = await Entrance_exam_results.findAll();
    res.json(listofResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const ExamResults = await Entrance_exam_results.findOne({
      where: { IndexNo: id },
    });

    if (ExamResults) {
      res.json(ExamResults);
    } 
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});

router.post("/", async (req, res) => {
  const postData = req.body;
  // try {
    const createdRecord = await Entrance_exam_results.create(postData);
    res.json(createdRecord);
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to create a record" });
  // }
});




router.delete("/", async (req, res) => {
  try {
    await Entrance_exam_results.destroy({ where: {} });
    res.json({
      message: `Records deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the records" });
  }
});

module.exports = router;
