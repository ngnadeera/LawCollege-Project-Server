const express = require("express");
const router = express.Router();
const { GEA_convicted_offence } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/",validateToken, async (req, res) => {
    const listOfconvictedoffence = await GEA_convicted_offence.findAll();
    res.json(listOfconvictedoffence);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_convicted_offence.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const convictedoffence = await GEA_convicted_offence.findByPk(id);
    res.json(convictedoffence);
})

module.exports = router;