const mongoose = require('mongoose');
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const expressHandlerbars = require("express-handlebars");

const JobSeekersController = require("./routes/job_seekers");
const airtableConnection = require("./airtable");

app.use(bodyParser.json());

app.get("/", (req, res)=> {
    res.send("<h1>Hello World</h1>")
});

app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", expressHandlerbars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts"
}));
app.set("view engine", "hbs");

app.use("/job-seekers", JobSeekersController);

app.listen(3000);