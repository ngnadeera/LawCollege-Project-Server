const express = require("express");
const router = express.Router();
const { Student_other_qulification } = require("../models")

router.get("/", async (req, res) => {
    const listOfotherqulification = await Student_other_qulification.findAll();
    res.json(listOfotherqulification);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Student_other_qulification.create(post);
    res.json(post);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const otherqulification = await Student_other_qulification.findByPk(id);
    res.json(otherqulification);
})

module.exports = router;