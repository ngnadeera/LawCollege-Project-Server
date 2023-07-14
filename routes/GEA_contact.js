const express = require("express");
const router = express.Router();
const { GEA_contact } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfcontact = await GEA_contact.findAll();
    res.json(listOfcontact);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_contact.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const contact = await GEA_contact.findByPk(id);
    res.json(contact);
})

module.exports = router;