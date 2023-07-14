const express = require("express");
const router = express.Router();
const { GEA_language_selection } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOflanguageselection = await GEA_language_selection.findAll();
    res.json(listOflanguageselection);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_language_selection.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const languageselection = await GEA_language_selection.findByPk(id);
    res.json(languageselection);
})

module.exports = router;