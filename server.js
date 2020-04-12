const mongoose = require('mongoose');
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const expressHandlerbars = require("express-handlebars");
const mongoConnection = require('./connection');

const jobSeekersRoutes = require("./controller/job_seekers");
app.use("/job_seekers", jobSeekersRoutes);

app.use(bodyParser.json());

app.get("/", (req, res)=> {
    const airtableConnection = require("./airtable");
    res.send("<h1>Updated airtable</h1>")
});

/* app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", expressHandlerbars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts"
}));
app.set("view engine", "hbs"); */

app.listen(3000, ()=>{
  console.log("Connected to port :" + 3000);
});