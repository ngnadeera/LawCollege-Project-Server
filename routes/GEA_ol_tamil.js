const express = require("express");
const router = express.Router();
const { GEA_ol_tamil } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfoltamil = await GEA_ol_tamil.findAll();
    res.json(listOfoltamil);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_ol_tamil.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const oltamil = await GEA_ol_tamil.findByPk(id);
    res.json(oltamil);
})

module.exports = router;