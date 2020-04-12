const mongoose = require('mongoose');
const airtable = require("airtable");
const express = require("express");
const router = express.Router();

const JobSeekerModel = require("../model/job_seekers");

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

/* router.post("/add", (req, res) => {
    console.log(req.body);

    var jobSeekerModel = new JobSeekerModel();
    jobSeekerModel.name = req.body.name;
    jobSeekerModel.title = req.body.title;
    jobSeekerModel.email = req.body.email;
    jobSeekerModel.location = req.body.location;
    jobSeekerModel.city = req.body.city;
    jobSeekerModel.unique_talent = req.body.unique_talent;
    jobSeekerModel.industry_specialization = req.body.industry_specialization;
    jobSeekerModel.open_to_relocation = req.body.open_to_relocation;
    jobSeekerModel.remote_only = req.body.remote_only;
    jobSeekerModel.linkedIn_url = req.body.linkedIn_url;
    jobSeekerModel.available_from = req.body.available_from;

    jobSeekerModel.save((err, doc) => {
        if (!err) {
            console.log("Saved data successfully :", doc);
        } else {

        }
    })
}) */

module.exports = router