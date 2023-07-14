const express = require("express");
const router = express.Router();
const { GEA_ol_sinhala } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfolsinhala = await GEA_ol_sinhala.findAll();
    res.json(listOfolsinhala);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_ol_sinhala.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const olsinhala = await GEA_ol_sinhala.findByPk(id);
    res.json(olsinhala);
})

module.exports = router;