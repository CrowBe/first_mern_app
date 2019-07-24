const express = require("express");
const router = express.Router();
const passport = require('passport');
const { celebrate, Joi } = require("celebrate");
const AuthController = require("./../controllers/auth_controller");

router.post("/login", celebrate({
    body: {
        username: Joi.string().required(),
        password: Joi.string().required()
    }
}), passport.authenticate("local"), AuthController.login);

router.post("/register", celebrate({
    body: {
        username: Joi.string().required(),
        password: Joi.string().required(),
        key: Joi.string().required()
    }
}), AuthController.register);

module.exports = router;