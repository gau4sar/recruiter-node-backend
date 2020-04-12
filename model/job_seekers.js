const mongoose = require("mongoose");

var JobSeekersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Required"
    },
    title: {
        type: String,
        required: "Required"
    },
    email: {
        type: String,
        required: "Required"
    },
    location: {
        type: String,
        required: "Required"
    },
    city: {
        type: String,
        required: "Required"
    },
    intro: {
        type: String
    },
    type: {
        type: Array,
        required: "Required",
        "default" : []
    },
    unique_talent: {
        type: String,
        required: "Required"
    },
    industry_specialization: {
        type: String
    },
    open_to_relocation: {
        type: String
    },
    remote_only: {
        type: Array,
        "default": []
    },
    linkedIn_url: {
        type: String,
        required: "Required"
    },
    available_from: {
        type: Date,
        required: "Required"
    }
});

module.exports = mongoose.model("job_seekers", JobSeekersSchema);