var Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key9UH2aGjkUBUPce'
});

var base = Airtable.base('apphkDVW5HQKQ7BI5');

base('Available recruiters list').select({
    // Selecting the first 3 records in Available recruiters list :
    maxRecords: 1,
    view: "Available recruiters list "
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
        console.log(
            "name", record.get('Name'),
            "\ntitle", record.get("Title"),
            "\nemail", record.get("Email"),
            "\nlocation", record.get("Country"),
            "\ncity :", record.get("Region / City"),
            "\nintro : ", record.get("Intro / notes"),
            "\ntype :", record.get("Type"),
            "\nunique_talent :", record.get("Unique talent"),
            "\nindustry_specialization : ", record.get("Industry specialisation?"),
            "\nopen_to_relocation :", record.get("Open to relocation?"),
            "\nremote_only :", record.get("Remote only?"),
            "\nlinkedIn_url : ", record.get("LinkedIn profile"),
            "\navailable_from  : ", record.get("Available from")
        );
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