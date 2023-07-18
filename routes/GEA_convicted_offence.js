const express = require("express");
const router = express.Router();
const { GEA_convicted_offence } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/",validateToken, async (req, res) => {
    const listOfconvictedoffence = await GEA_convicted_offence.findAll();
    res.json(listOfconvictedoffence);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_convicted_offence.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const convictedoffence = await GEA_convicted_offence.findByPk(id);
    res.json(convictedoffence);
})

router.put("/:id", validateToken, async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
  
      const existingApplicant = await GEA_convicted_offence.findOne({
        where: { GEApplicantID: id }
      });
  
      if (existingApplicant) {

        await GEA_convicted_offence.update(body, { where: { GEApplicantID: id } });
        return res.status(200).json({ message: "Applicant edit request updated successfully" });
      } else {

        await GEA_convicted_offence.create({ GEApplicantID: id, ...body});
        return res.status(200).json({ message: "New applicant record created successfully" });
      }
  
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to update applicant edit request" });
    }
  });

module.exports = router;