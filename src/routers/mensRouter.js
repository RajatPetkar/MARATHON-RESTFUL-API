const express = require("express");
const { get } = require("mongoose");
const router = new express.Router();
const MenRanking = require("../models/mens");

router.get('/', async (req, res) => {
  res.send('go to /mens to view all data present in database')
})

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MenRanking(req.body);
    const insert = await addingMensRecords.save();
    res.send(insert);
  } catch (error) {
    res.send(error);
  }
});
router.get("/mens", async (req, res) => {
  try {
    const getData = await MenRanking.find({});
    console.log(getData);
    res.send(getData);
  } catch (error) {
    res.send(error);
  }
});
router.get("/mens/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const getData = await MenRanking.find({ _id });
    console.log(getData);
    res.send(getData);
    if (!stud_Data) {
      return res.status(404).send();
    }
  } catch (error) {
    res.send(error);
  }
});
router.patch("/mens/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const getData = await MenRanking.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    console.log(getData);
    res.send(getData);
    if (!stud_Data) {
      return res.status(404).send();
    }
  } catch (error) {
    res.send(error);
  }
});
router.delete("/mens/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const getData = await MenRanking.findByIdAndDelete({ _id },{new: true});
    console.log(getData);
    res.send(getData);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
