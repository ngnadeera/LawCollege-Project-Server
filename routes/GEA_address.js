const express = require("express");
const router = express.Router();
const { GEA_address } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");


router.get("/", validateToken, async (req, res) => {
    const listOfAddress = await GEA_address.findAll();
    res.json(listOfAddress);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_address.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const Address = await GEA_address.findByPk(id);
    res.json(Address);
})

module.exports = router;