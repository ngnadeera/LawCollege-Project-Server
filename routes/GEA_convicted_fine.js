const express = require("express");
const router = express.Router();
const { GEA_convicted_fine } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");

router.get("/",validateToken, async (req, res) => {
    const listOfconvictedfine = await GEA_convicted_fine.findAll();
    res.json(listOfconvictedfine);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_convicted_fine.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const convictedfine = await GEA_convicted_fine.findByPk(id);
    res.json(convictedfine);
})

router.put("/:id", validateToken, async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
  
      const existingApplicant = await GEA_convicted_fine.findOne({
        where: { GEApplicantID: id }
      });
  
      if (existingApplicant) {

        await GEA_convicted_fine.update(body, { where: { GEApplicantID: id } });
        return res.status(200).json({ message: "Applicant edit request updated successfully" });
      } else {

        await GEA_convicted_fine.create({ GEApplicantID: id, ...body});
        return res.status(200).json({ message: "New applicant record created successfully" });
      }
  
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to update applicant edit request" });
    }
  });


module.exports = router;