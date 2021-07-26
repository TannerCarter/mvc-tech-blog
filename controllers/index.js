const router = require("express").Router();
// routes
const apiRoute = require("./api");
const homeRoute = require("./home-route.js");
const dashboardRoute = require("./dashboard-route.js");

router.use("/api", apiRoute);
router.use("/", homeRoute);
router.use("/dashboard", dashboardRoute);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
