const express = require("express");
const router = express.Router();
const { GEA_al_results } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/",validateToken, async (req, res) => {
    const listOfalresults = await GEA_al_results.findAll();
    res.json(listOfalresults);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_al_results.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const alresults = await GEA_al_results.findAll({ where: { GEApplicantID: id }});
    res.json(alresults);
})

module.exports = router;