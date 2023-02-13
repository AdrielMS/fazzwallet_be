const express = require("express");
const router = express();

//import route mvp
const authRoute = require("../route/route_auth");
const historyRoute = require("../route/route_history");
// end

router.get("/", (req, res) => {
  return res.send("Backend for Hiringme");
});

// route.use("/apa", panggil inisial importnya)
router.use("/auth", authRoute);
router.use("/profile", historyRoute);
// router.use("/Profile", historyRoute);
//end

module.exports = router;
