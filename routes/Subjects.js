const express = require("express");
const router = express.Router();
const { Subjects } = require("../models");

router.get("/", async (req, res) => {
  const listOfSub = await Subjects.findAll();
  res.json(listOfSub);
});

router.post("/", async (req, res) => {
  const posts = req.body;
  for (const post of posts) {
    await Subjects.create(post);
  }

  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const sub = await Subjects.findByPk(id);
  res.json(sub);
});

module.exports = router;
