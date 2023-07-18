const express = require("express");
const router = express.Router();
const { GEA_address } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");


router.get("/", validateToken, async (req, res) => {
    const listOfAddress = await GEA_address.findAll();
    res.json(listOfAddress);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_address.create(post);
    res.json(post);
});

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id; 
    const Address = await GEA_address.findByPk(id);
    res.json(Address);
})

router.put("/:id", validateToken, async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const updatedApplicant = await GEA_address.update(
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

module.exports = router;