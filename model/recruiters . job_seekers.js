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
        type: String,
        required: "Required"
    },
    type: {
        type: Array,
        required: "Required"
    },
    unique_talent: {
        type: String,
        required: "Required"
    },
    industry_specialization: {
        type: String,
        required: "Required"
    },
    open_to_relocation: {
        type: Boolean,
        required: "Required"
    },
    remote_only: {
        type: Number,
        required: "Required"
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

mongoose.model("job_seekers", JobSeekersSchema);