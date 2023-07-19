const express = require("express");
const router = express.Router();
const { View_entexmaddmilist } = require("../models")

router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const user = await View_entexmaddmilist.findOne({
        where: { GEApplicantID: id },
      });
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
      res.status(500).json({ error: "Error retrieving user" });
    }
  });

module.exports = router;