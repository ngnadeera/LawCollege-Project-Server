const express = require("express");
const router = express.Router();
const { Exam_Medicals } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewear");


router.get("/", async (req, res) => {
  try {
    const listofResults = await Exam_Medicals.findAll();
    res.json(listofResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

router.get("/:id",validateToken, async (req, res) => {
  const id = req.params.id;
  try {
    const ExamResults = await Exam_Medicals.findOne({
      where: { IndexNo: id },
    });

    if (ExamResults) {
      res.json(ExamResults);
    } 
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" }, error);
  }
});

router.get("/user/medical",validateToken, async (req, res) => {
  const id = req.user.RegNo;
  try {
    const ExamResults = await Exam_Medicals.findOne({
      where: { RegNo: id },
    });

    if (ExamResults) {
      res.json(ExamResults);
    } 
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" }, error);
  }
});

router.post("/",validateToken, async (req, res) => {
    const id = req.user.RegNo

    const postData = req.body;
  try {
    const createdRecord = await Exam_Medicals.create({
        RegNo : id,
        ...postData
    });
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record", error });
  }
});




router.delete("/", async (req, res) => {
  try {
    await Exam_Medicals.destroy({ where: {} });
    res.json({
      message: `Records deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the records" });
  }
});

module.exports = router;