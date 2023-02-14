const express = require("express");
const router = express();
const multer = require("multer");
const formUpload = require("../../helper(db)/formUpload");

const authController = require("../controller/controller_auth");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/users", formUpload.single("img"), authController.get);
router.get("/users/:id", formUpload.single("img"), authController.getDetail);
router.patch("/users/:id", formUpload.single("img"), authController.update);

module.exports = router;
