const express = require("express");
const router = express.Router();
const { GEA_other_qulification } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfotherqulification = await GEA_other_qulification.findAll();
    res.json(listOfotherqulification);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_other_qulification.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const otherqulification = await GEA_other_qulification.findByPk(id);
    res.json(otherqulification);
})

module.exports = router;