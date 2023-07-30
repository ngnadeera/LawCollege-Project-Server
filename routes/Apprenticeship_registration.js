const express = require("express");
const router = express.Router();
const { Apprenticeship_registration } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddlewear')

router.get("/", async (req, res) => {
  const listOfSub = await Apprenticeship_registration.findAll();
  res.json(listOfSub);
});

router.post("/",validateToken, async (req, res) => {
  const id = req.user.RegNo
  const postData = req.body;
  try {
    const createdRecord = await Apprenticeship_registration.create({
      RegNo : id,
      PaymentVerification : 'pending',
      ApprenticeshipApproval : 'pending',
      ...postData

    });
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

router.get("/user",validateToken, async (req, res) => {
  const id = req.user.RegNo;

    const payment = await Apprenticeship_registration.findByPk(id);

      res.json(payment);
  
 
});


// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const sub = await Apprenticeship_registration.findByPk(id);
//   res.json(sub);
// });

module.exports = router;