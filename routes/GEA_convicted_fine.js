const express = require("express");
const router = express.Router();
const { GEA_convicted_fine } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/",validateToken, async (req, res) => {
    const listOfconvictedfine = await GEA_convicted_fine.findAll();
    res.json(listOfconvictedfine);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_convicted_fine.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const convictedfine = await GEA_convicted_fine.findByPk(id);
    res.json(convictedfine);
})


module.exports = router;