const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const xlsxPopulate = require("xlsx-populate");
const { Preliminary_exam_results } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewear");

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

router.get("/", validateToken, async (req, res) => {
  const id = req.user.RegNo;
  try {
    const listOfResults = await Preliminary_exam_results.findAll({
      where : {RegNo:id},
    });
    res.json(listOfResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

router.get("/results/allusers", validateToken, async (req, res) => {
  try {
    const listOfResults = await Preliminary_exam_results.findAll();
    res.json(listOfResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Preliminary_exam_results.findOne({
      where: {IndexNo:id},
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

router.post("/", validateToken,  async (req, res) => {
  const postData = req.body;

    const createdRecord = await Preliminary_exam_results.create(postData);
    res.json(createdRecord);

 

});


// router.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) {
//       res.status(400).json({ error: "No file uploaded" });
//       return;
//     }

//     const workbook = await xlsxPopulate.fromDataAsync(req.file.buffer);

//     const worksheet = workbook.sheet(0);
//     const rows = worksheet.usedRange().value();

//     const results = [];

//     rows.forEach((row, index) => {
//       // Skip the header row (if it exists)
//       if (index === 0) return;

//       const [IndexNo, RegNo, LW101, LW102, LW103, LW106, LW107, LW108, LW109, LW203, LW210,Total, Average, Grade] = row;

//       // Validate the data if needed

//       results.push({ IndexNo,  RegNo, LW101, LW102,LW103, LW106, LW107, LW108, LW109, LW203, LW210, Total, Average, Grade});
//     });

//     // Save the records in the database
//     await Preliminary_exam_results.bulkCreate(results);

//     res.status(200).json({ message: "File uploaded successfully" });
//   } catch (error) {
//     console.error("Failed to upload file:", error);
//     res.status(500).json({ error: "Failed to upload file" });
//   }
// });

router.post("/", async (req, res) => {
  const postData = req.body;
  try {
    const createdRecord = await Preliminary_exam_results.create(postData);
    res.json(createdRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a record" });
  }
});

router.delete("/", async (req, res) => {
  try {
    await Preliminary_exam_results.destroy({ where: {} });
    res.json({
      message: `Records deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the records" });
  }
});

module.exports = router;