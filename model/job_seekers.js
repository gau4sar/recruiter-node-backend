const mongoose = require("mongoose");

var JobSeekersSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    city: {
        type: String
    },
    intro: {
        type: String
    },
    type: {
        type: Array,
        "default" : []
    },
    unique_talent: {
        type: String
    },
    industry_specialization: {
        type: String
    },
    open_to_relocation: {
        type: String
    },
    remote_only: {
        type: Array
    },
    linkedIn_url: {
        type: String
    },
    available_from: {
        type: Date
    }
});

module.exports = mongoose.model("job_seekers", JobSeekersSchema);