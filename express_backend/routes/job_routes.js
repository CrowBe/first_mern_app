const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const JobController = require("../controllers/job_controller");

router.get("/", JobController.index);

router.post("/new", celebrate({
    body: {

    }
}), JobController.create);

router.patch("/update", celebrate({
    body: {

    }
}), JobController.update)

router.put("./update",  celebrate({
    body: {
        
    }
}), JobController.update)

module.exports = router;