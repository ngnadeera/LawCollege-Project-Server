const express = require("express");
const router = express.Router();
const { GEA_al } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfal = await GEA_al.findAll();
    res.json(listOfal);
});

router.post("/", validateToken,  async (req, res) => {
    const post = req.body;
    await GEA_al.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const al = await GEA_al.findByPk(id);
    res.json(al);
})

module.exports = router;