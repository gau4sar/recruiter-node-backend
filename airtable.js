var Airtable = require('airtable');
const moongoose = require("mongoose");
const JobSeekerModel = require('./model/job_seekers');


Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key9UH2aGjkUBUPce'
});

var base = Airtable.base('apphkDVW5HQKQ7BI5');

base('Available recruiters list').select({
    // Selecting the first 3 records in Available recruiters list :
    view: "Available recruiters list "
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {

        var name = record.get('Name');
        var title = record.get("Title");
        if (title == undefined) {
            title = null
        } else {
            title = title.trim();
        }
        var email = record.get("Email");
        var location = record.get("Country");
        var city = record.get("Region / City");
        var intro = record.get("Intro / notes");
        var type = record.get("Type");
        var unique_talent = record.get("Unique talent");
        var industry_specialization = record.get("Industry specialisation?");
        var open_to_relocation = record.get("Open to relocation?");
        if (open_to_relocation == undefined) {
            open_to_relocation = null
        } else {
            open_to_relocation = open_to_relocation.trim();
        }
        var remote_only = record.get("Remote only?")
        if (remote_only == undefined) {
            remote_only = []
        }
        var linkedIn_url = record.get("LinkedIn profile");
        var available_from = record.get("Available from");

        console.log(
            "name", name,
            "\ntitle", title,
            "\nemail", email,
            "\nlocation", location,
            "\ncity :", city,
            "\nintro : ", intro,
            "\ntype :", type,
            "\nunique_talent:", unique_talent,
            "\nindustry_specialization: ", industry_specialization,
            "\nopen_to_relocation :", open_to_relocation,
            "\nremote_only :", remote_only,
            "\nlinkedIn_url : ", linkedIn_url,
            "\navailable_from  : ", available_from
        );

        var jobSeekerModel = new JobSeekerModel();
        jobSeekerModel.name = name;
        jobSeekerModel.title = title;
        jobSeekerModel.email = email;
        jobSeekerModel.location = location;
        jobSeekerModel.city = city;
        jobSeekerModel.unique_talent = unique_talent;
        jobSeekerModel.industry_specialization = industry_specialization;
        jobSeekerModel.open_to_relocation = open_to_relocation;
        jobSeekerModel.remote_only = remote_only;
        jobSeekerModel.linkedIn_url = linkedIn_url;
        jobSeekerModel.available_from = available_from;

        jobSeekerModel.save((err, doc) => {
            if (!err) {
                console.log("Saved data successfully :", doc);
            } else {
                console.log("Error saving data to db", err);
            }
        })

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

function getCountryName(currentLocation) {
    console.log("Country name: ${currentLocation}")
    base('Country list').find(currentLocation, function (err, record) {
        if (err) { console.error(err); return; }
        console.log('Retrieved', record.currentLocation);
    });
}


module.exports = Airtable