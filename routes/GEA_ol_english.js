const express = require("express");
const router = express.Router();
const { GEA_ol_english } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfolenglish = await GEA_ol_english.findAll();
    res.json(listOfolenglish);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_ol_english.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const olenglish = await GEA_ol_english.findByPk(id);
    res.json(olenglish);
})

module.exports = router;