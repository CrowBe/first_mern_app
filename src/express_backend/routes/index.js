const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes");
const UploadRoutes = require("./upload_routes")
const JobRoutes = require("./job_routes");
const passport = require("passport");

router.use("/auth", AuthRoutes);
router.use("/upload",passport.authenticate("jwt", { session: false }), UploadRoutes);
router.use("/jobs", passport.authenticate("jwt", { session: false }), JobRoutes);

module.exports = router;