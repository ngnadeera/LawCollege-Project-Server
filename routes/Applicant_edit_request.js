const express = require("express");
const router = express.Router();
const { Applicant_edit_request,GEA_personal_details } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewearApplicant");


router.get("/", validateToken, async (req, res) => {
    const listOfEditRequest = await Applicant_edit_request.findAll();
    res.json(listOfEditRequest);
});

router.post("/",validateToken,  async (req, res) => {
    try {
   
      const { PaymentDate, BankName, PaymentType, ReferenceNumber} = req.body;

      const Username = req.user.Username;
      const applicant = await GEA_personal_details.findOne({ where: { Username: Username } });
  
      if (!applicant) {
        return res.status(404).json({ error: "Applicant not found" });
      }
  
      await Applicant_edit_request.create({
        GEApplicantID: applicant.GEApplicantID,
        Username: Username,
        EditAccess: false,
        PaymentDate : PaymentDate,
        BankName : BankName,
        PaymentType : PaymentType,
        ReferenceNumber : ReferenceNumber
      });
  
      res.json("Success!");
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to create applicant edit request" });
    }
  });
  

module.exports = router;