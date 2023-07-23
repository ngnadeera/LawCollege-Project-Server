const express = require("express");
const router = express.Router();
const { Notices } = require("../models");


router.get("/listOfNotices", async (req, res) => {
    try {
      const listOfNotices = await Notices.findAll({
        where: {
          VerificationStatus: "Verified"
        }
      });
      res.json(listOfNotices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while retrieving the data" });
    }
  });
  

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    await Notices.create({VerificationStatus: "Pending", ...body});
    res.json(body);
  } catch (error) {

    res.status(500).json({ error: "An error occurred while creating the record" });
  }
});

router.get("/:id",  async (req, res) => {
  try {
    const id = req.params.id;
    const Notice = await Notices.findAll({ where: { NoticeID: id } });
    res.json(Notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving the data" });
  }
});

router.put('/verification/:id', async (req, res) => {
    const noticeId = req.params.id;
    const { VerificationStatus } = req.body;

    try {

        const notice = await Notices.findByPk(noticeId);

        if (!notice) {
            return res.status(404).json({ error: 'Notice not found' });
        }

        await notice.update({ VerificationStatus });

        return res.status(200).json({ message: 'VerificationStatus updated successfully' });
    } catch (error) {
        console.error('Error updating VerificationStatus:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
