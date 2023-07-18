const express = require("express");
const router = express.Router();
const { GEA_ol_sinhala } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfolsinhala = await GEA_ol_sinhala.findAll();
    res.json(listOfolsinhala);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_ol_sinhala.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const olsinhala = await GEA_ol_sinhala.findByPk(id);
    res.json(olsinhala);
})


router.put("/:id", validateToken, async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
  
      const existingApplicant = await GEA_ol_sinhala.findOne({
        where: { GEApplicantID: id }
      });
  
      if (existingApplicant) {

        await GEA_ol_sinhala.update(body, { where: { GEApplicantID: id } });
        return res.status(200).json({ message: "Applicant edit request updated successfully" });
      } else {

        await GEA_ol_sinhala.create({ GEApplicantID: id, ...body});
        return res.status(200).json({ message: "New applicant record created successfully" });
      }
  
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to update applicant edit request" });
    }
  });

module.exports = router;