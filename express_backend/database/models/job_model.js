const mongoose = require("mongoose");
const JobSchema = require("./../schemas/job_schema");

const JobModel = mongoose.model("Job", JobSchema);

module.exports = JobModel;