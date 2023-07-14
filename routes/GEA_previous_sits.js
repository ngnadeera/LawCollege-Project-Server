const express = require("express");
const router = express.Router();
const { GEA_previous_sits } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken,  async (req, res) => {
  try {
    const listOfprevioussits = await GEA_previous_sits.findAll();
    res.json(listOfprevioussits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving the data" });
  }
});

router.post("/", validateToken, async (req, res) => {
  try {
    const post = req.body;
    await GEA_previous_sits.create(post);
    res.json(post);
  } catch (error) {

    res.status(500).json({ error: "An error occurred while creating the record" });
  }
});

router.get("/:id", validateToken,  async (req, res) => {
  try {
    const id = req.params.id;
    const previoussits = await GEA_previous_sits.findAll({ where: { GEApplicantID: id } });
    res.json(previoussits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving the data" });
  }
});

module.exports = router;
