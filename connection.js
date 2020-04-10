const moongoose = require("mongoose");

moongoose.connect("mongodb://localhost:27017/recruiters", (error)=> {
    if(!error) {
        console.log("Connected successfully !!")
    } else {
        console.log("Error:", error.errmsg);
    }
})

const JobSeeker = require('./model/job_seekers.model')


/* const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "eu-cdbr-west-02.cleardb.net",
    user: "b2eb589c13b38e",
    password: "7bf88910",
    database: "heroku_ba4e1a29199c2ca", 
    host: "127.0.0.1",
    user: "root",
    password: "Gappu@1234",
    database: "recruiters",
    multipleStatements: true
});

mysqlConnection.connect((err)=> {
    if(!err) {
        console.log("Connected to mysql db");
    } else{
        console.log("Connection failed !!!" + err.message);
    }
}); */

module.exports = moongoose








