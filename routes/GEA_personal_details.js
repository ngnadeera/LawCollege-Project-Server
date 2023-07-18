const express = require("express");
const router = express.Router();
const { GEA_personal_details } = require("../models")
const { validateToken }  = require("../middlewares/AuthMiddlewearApplicant")

router.get("/", validateToken, async (req, res) => {
  try {
    const { Username } = req.user;
    const user = await GEA_personal_details.findOne({
      where: { Username },
    });
    res.json(user ? [user] : []);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

router.get("/userId", validateToken, async (req, res) => {
  try {
    const { Username } = req.user;
    const user = await GEA_personal_details.findOne({
      where: { Username },
    });
    res.json(user.GEApplicantID);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

router.post("/", validateToken, async (req, res) => {
    const { Title, NIC, NameInFull, Gender, DOB, CivilStatus, SrilankaCitizenship } = req.body;
    try {
      const maxStudentID = await GEA_personal_details.max("GEApplicantID");
      const nextID = generateNextStudentID(maxStudentID);
      const Username = req.user.Username;
      const newStudent = await GEA_personal_details.create({
        GEApplicantID: nextID,
        Title,
        NIC,
        NameInFull,
        Gender,
        DOB,
        CivilStatus,
        SrilankaCitizenship,
        Username
      });
      res.json(newStudent);
    } catch (error) {
      console.error("Error creating student:", error);
      res.status(500).json({ error: "Failed to create student" });
    }
  });
  

router.get("/:id", validateToken,  async (req, res) => {
    const id = req.params.id; 
    const applicant = await GEA_personal_details.findByPk(id);
    res.json(applicant);
})

router.put("/:id", validateToken, async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedApplicant = await GEA_personal_details.update(
      body,
      { where: { GEApplicantID: id } }
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

function generateNextStudentID(maxStudentID) {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    if (maxStudentID) {
      const prefix = maxStudentID.substring(0, 3);
      const num = parseInt(maxStudentID.substring(3), 10) + 1;
      return prefix + num.toString().padStart(4, "0");
    } else {
      return "GEA" + currentYear + "0001"; // Initial ID if no records exist yet
    }
  }
  

module.exports = router;