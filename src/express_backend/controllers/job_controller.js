const JobModel = require("./../database/models/job_model");
const { ObjectId } = require("mongodb")


async function create(req, res) {
    const { customerName } = req.body;
    const job = new JobModel({ customerName });
    await job.save();
    console.log("saved")
    res.json(job);
}

async function show(req,res) {
    const { id } = req.query;
    console.log(typeof(id))
    const job = await JobModel.findOne(ObjectId(id));
    res.json(job)
}

async function index(req, res) {
    const jobs = await JobModel.find({}, {status: 1, customerName: 1});
    res.json(jobs);
}

async function update(req, res) {
    //TODO: take in params and use them to update database
    // then return updated job
}

module.exports = {
    create,
    index,
    update,
    show
}