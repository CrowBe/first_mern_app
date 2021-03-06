const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const passport = require("./config/passport");

app.use(cors());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(morgan("combined"));

app.use(passport.initialize());

app.use(require("./routes"));

app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;