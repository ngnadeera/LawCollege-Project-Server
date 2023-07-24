const express = require("express");
const router = express.Router();
const { Student_al } = require("../models")

router.get("/", async (req, res) => {
    const listOfal = await Student_al.findAll();
    res.json(listOfal);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Student_al.create(post);
    res.json(post);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const al = await Student_al.findByPk(id);
    res.json(al);
})

module.exports = router;