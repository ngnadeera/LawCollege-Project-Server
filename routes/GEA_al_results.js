const express = require("express");
const router = express.Router();
const { GEA_al_results } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/",validateToken, async (req, res) => {
    const listOfalresults = await GEA_al_results.findAll();
    res.json(listOfalresults);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_al_results.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const alresults = await GEA_al_results.findAll({ where: { GEApplicantID: id }});
    res.json(alresults);
})

router.put("/:id/:subjectNumber", validateToken, async (req, res) => {
    try {
      const id = req.params.id;
      const subjectNumber = req.params.subjectNumber;
      const body = req.body;
      const UpdatedSubNumber = req.body.SubjectNumber
  
      const existingApplicant = await GEA_al_results.findOne({
        where: { GEApplicantID: id, SubjectNumber: subjectNumber }
      });
  
      if (existingApplicant) {
        await GEA_al_results.update({SubjectNumber:UpdatedSubNumber, ...body}, {
          where: { GEApplicantID: id, SubjectNumber: subjectNumber }
        });
        return res
          .status(200)
          .json({ message: "Applicant edit request updated successfully" });
      } else {
        await GEA_al_results.create({
          GEApplicantID: id,
          SubjectNumber: subjectNumber,
          ...body
        });
        return res
          .status(200)
          .json({ message: "New applicant record created successfully" });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message || "Failed to update applicant edit request"
      });
    }
  });
  

module.exports = router;