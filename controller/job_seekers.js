const mongoose = require('mongoose');
const airtable = require("airtable");
const express = require("express");
const router = express.Router();
var generalUtils = require('../utils').GENERAL;

const JobSeekerModel = require("../model/job_seekers");

router.get("/update", (req, res) => {
    const airtableConnection = require("../airtable");
    res.send("<h1>Updated airtable</h1>")
})

router.get("/", (req, res) => {
    var queryLocation = req.query.location;

    if (queryLocation == null) {
        res.send("Calling Job seekers controller").json();
    } else {
        JobSeekerModel.find({ location: queryLocation }, (err, docs) => {
            if (!err) {
                console.log(docs);
                res.send(docs);
            } else {
                res.send("Error response" + err)
            }
        })
    }
})

router.get("/country-list", (req, res) => {

    JobSeekerModel.distinct("location", (err, docs) => {
        if (!err) {
            console.log(docs);

            var locationList = [];
            docs.forEach(function (value) {
                locationList.push(value);
            });

            res.json({location : locationList})
        } else {
            console.log("Error : ", err.json);
        }
    });
})

module.exports = router