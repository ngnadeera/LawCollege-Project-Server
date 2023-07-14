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