const express = require("express");
const router = express.Router();
const { Student_al_results } = require("../models");

router.get("/", async (req, res) => {
  const listOfalresults = await Student_al_results.findAll();
  res.json(listOfalresults);
});

router.post("/", async (req, res) => {
  const posts = req.body;

  for (const post of posts) {
    await Student_al_results.create(post);
  }

  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const alresults = await Student_al_results.findAll({ where: { RegNo: id } });
  res.json(alresults);
});

module.exports = router;
