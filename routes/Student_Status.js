const express = require("express");
const router = express.Router();
const { Student_Status } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewear");

router.get("/", async (req, res) => {
  const listOfpayment = await Student_Status.findAll();
  res.json(listOfpayment);
});

router.post("/", async (req, res) => {
  const postData = req.body;
  try {
    const createdRecord = await Student_Status.create(postData);
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const payment = await Student_Status.findByPk(id);
//     if (payment) {
//       res.json(payment);
//     } else {
//       res.status(404).json({ error: "Record not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve the record" });
//   }
// });

// router.put("/:id", validateToken,  async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   try {
//     let payment = await Student_Status.findByPk(id);

//     if (payment) {
//       // If the record exists, update it
//       await payment.update(updatedData);
//       res.json(payment);
//     } else {
//       // If the record doesn't exist, create a new row with the provided id and updatedData
//       payment = await Student_Status.create({ id, ...updatedData });
//       res.json(payment);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update the record" });
//   }
// });

// router.post("/user", validateToken,  async (req, res) => {
//   const postData = req.body;
//   try {
//     const createdRecord = await Student_Status.create(postData);
//     res.json(createdRecord);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create a record" });
//   }
// });


router.put("/user", validateToken,  async (req, res) => {
  const id = req.user.RegNo;
  const updatedData = req.body;
  try {
    let payment = await Student_Status.findByPk(id);

    if (payment) {
      // If the record exists, update it
      await payment.update(updatedData);
      res.json(payment);
    } else {
      // If the record doesn't exist, create a new row with the provided id and updatedData
      payment = await Student_Status.create({ id, ...updatedData });
      res.json(payment);
    }
  } catch (error) {
    res.json(error);
  }
});


router.get("/user", validateToken, async (req, res) => {
  const id = req.user.RegNo;
  try {
    const payment = await Student_Status.findByPk(id);
    if (payment) {
      res.json(payment);
    } else {
      res.json({ dataNotFound: true });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the record" });
  }
});


module.exports = router;
