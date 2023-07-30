const express = require("express");
const router = express.Router();
const { Calling_withdrawals } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewear");
// const {validateToken} = require('../middlewares/AuthMiddlewear')

router.get("/", async (req, res) => {
  const listOfSub = await Calling_withdrawals.findAll();
  res.json(listOfSub);
});

router.post("/", async (req, res) => {
  const posts = req.body;
  for (const post of posts) {
    await Calling_Exam_Registration.create(post);
  }

  res.json(posts);
});

router.get("/user", validateToken, async (req, res) => {
  const id = 1;
  try {
    const payment = await Calling_withdrawals.findByPk(id);

      res.json(payment);
  
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});


// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const sub = await Calling_Exam_Registration.findByPk(id);
//   res.json(sub);
// });

module.exports = router;