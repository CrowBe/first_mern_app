const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const JobController = require("../controllers/job_controller");

router.get("/", JobController.index);

router.post("/new", celebrate({
    body: {
        customerName: Joi.string().required()
    }
}), JobController.create);

router.get("/show", JobController.show);

router.patch("/update", celebrate({
    body: {

    }
}), JobController.update);

router.put("./update",  celebrate({
    body: {
        
    }
}), JobController.update);


module.exports = router;