const express = require("express");
const router = express.Router();
const { Entrance_exam_admission } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listofExamCenter = await Entrance_exam_admission.findAll();
    res.json(listofExamCenter);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

router.post("/", async (req, res) => {
  const postData = req.body;
  try {
    const createdRecord = await Entrance_exam_admission.create(postData);
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

router.delete("/", async (req, res) => {
  try {
    await Entrance_exam_admission.destroy({ where: {} });
    res.json({
      message: `Records deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the records" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Entrance_exam_admission.findOne({
      where: { GEApplicantID: id },
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Error retrieving user" });
  }
});

module.exports = router;
