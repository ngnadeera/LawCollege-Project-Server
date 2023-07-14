const express = require("express");
const router = express.Router();
const { GEA_payment } = require("../models")
const {validateToken} = require("../middlewares/AuthMiddlewearApplicant")

router.get("/", validateToken, async (req, res) => {
    const listOfpayment = await GEA_payment.findAll();
    res.json(listOfpayment);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    await GEA_payment.create(post);
    res.json(post);
});

router.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id; 
    const payment = await GEA_payment.findByPk(id);
    res.json(payment);
})

module.exports = router;