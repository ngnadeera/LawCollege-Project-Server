const express = require("express");
const router = express.Router();
const { Student_personal_details } = require("../models")
const {validateToken} = require('../middlewares/AuthMiddlewear')


router.get("/", async (req, res) => {
    const listOfStudents = await Student_personal_details.findAll();
    res.json(listOfStudents);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Student_personal_details.create(post); 
    res.json(post);
});

router.get("/ById",validateToken, async (req, res) => {

    const id = req.user.RegNo
    console.log("id",id)
    const applicant = await Student_personal_details.findByPk(id);
    res.json(applicant);
})


router.put("/", validateToken, async (req, res) => {
    try {
      const id = req.user.RegNo
      const body = req.body;
      const updatedApplicant = await Student_personal_details.update(
        body,
        { where: { RegNo: id } }
      );
  
      if (updatedApplicant[0] === 0) {
        return res.status(404).json({ error: "Applicant edit request not found" });
      } else {
        return res.status(200).json({ message: "Applicant edit request updated successfully" });
      }
  
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to update applicant edit request" });
    }
  });

module.exports = router;