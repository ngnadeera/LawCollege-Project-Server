const express = require("express");
const router = express.Router();
const { Student_personal_details } = require("../models")

router.get("/", async (req, res) => {
    const listOfStudents = await Student_personal_details.findAll();
    res.json(listOfStudents);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Student_personal_details.create(post); 
    res.json(post);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const applicant = await Student_personal_details.findByPk(id);
    res.json(applicant);
})

module.exports = router;