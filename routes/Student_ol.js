const express = require("express");
const router = express.Router();
const { Student_ol } = require("../models")

router.get("/", async (req, res) => {
    const listOfol = await Student_ol.findAll();
    res.json(listOfol);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Student_ol.create(post);
    res.json(post);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const ol = await Student.findAll({ where: { RegNo: id }});
    res.json(ol);
})

module.exports = router;