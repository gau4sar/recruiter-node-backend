const mongoose = require('mongoose');
const airtable = require("airtable");
const express = require("express");
const router = express.Router();

const JobSeekerModel = mongoose.model("job_seekers");

router.get("/", (req, res) => {
    JobSeekerModel.find((err, docs) => {
        if (!err) {
            console.log(docs);
            res.send("Job seekers controller")
        } else {
            res.send("Error response" + err)
        }
    })
})

module.exports = router;