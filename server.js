const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const mySqlConnection = require("./connection");
const JobSeekersRoutes = require("./routes/job_seekers");
const airtableConnection = require("./airtable");

var app = express();
app.use(bodyParser.json());

app.use("/job-seekers", JobSeekersRoutes);

app.listen(3000);