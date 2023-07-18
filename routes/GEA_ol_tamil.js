const express = require("express");
const router = express.Router();
const { GEA_ol_tamil } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/", validateToken, async (req, res) => {
    const listOfoltamil = await GEA_ol_tamil.findAll();
    res.json(listOfoltamil);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_ol_tamil.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const oltamil = await GEA_ol_tamil.findByPk(id);
    res.json(oltamil);
})

router.put("/:id", validateToken, async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
  
      const existingApplicant = await GEA_ol_tamil.findOne({
        where: { GEApplicantID: id }
      });
  
      if (existingApplicant) {

        await GEA_ol_tamil.update(body, { where: { GEApplicantID: id } });
        return res.status(200).json({ message: "Applicant edit request updated successfully" });
      } else {

        await GEA_ol_tamil.create({ GEApplicantID: id, ...body});
        return res.status(200).json({ message: "New applicant record created successfully" });
      }
  
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to update applicant edit request" });
    }
  });

module.exports = router;