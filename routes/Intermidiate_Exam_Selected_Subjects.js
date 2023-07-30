const express = require("express");
const router = express.Router();
const { Intermidiate_Exam_Selected_Subjects } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddlewear')


router.get("/", async (req, res) => {
  const listOfSub = await Intermidiate_Exam_Selected_Subjects.findAll();
  res.json(listOfSub);
});

router.post("/",validateToken, async (req, res) => {
  const id = req.user.RegNo;
  const postData = req.body;

  const createdRecord = await Intermidiate_Exam_Selected_Subjects.create({
    RegNo: id,
    ...postData
  });
    res.json(createdRecord);
  
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const sub = await Intermidiate_Exam_Selected_Subjects.findByPk(id);
  res.json(sub);
});

module.exports = router;