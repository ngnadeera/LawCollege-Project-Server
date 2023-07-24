const express = require("express");
const router = express.Router();
const { Registered_Applicants } = require("../models")

router.get("/", async (req, res) => {
    const listOfapplicant = await Registered_Applicants.findAll();
    res.json(listOfapplicant);
});

router.post("/", async (req, res) => {
  try{
    const post = req.body;
    await Registered_Applicants.create(post);
    res.json(post);

  }catch (e){
    console.log(e);
  }
    
});

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const applicant = await Registered_Applicants.findAll({ where: { GEApplicantID: id }});
    res.json(applicant);
})

router.delete("/", async (req, res) => {
    try {
      await Registered_Applicants.destroy({ where: {} });
      res.json({
        message: `Records deleted successfully`,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete the records" });
    }
  });

module.exports = router;