const express = require("express");
const router = express.Router();
const { Student_convicted} = require("../models")

router.get("/", async (req, res) => {
    const listOfconvicted = await Student_convicted.findAll();
    res.json(listOfconvicted);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Student_convicted.create(post);
    res.json(post);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const convictedfine = await Student_convicted.findAll({ where: { RegNo: id }});
    res.json(convictedfine);
})

module.exports = router;