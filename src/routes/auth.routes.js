const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/verify-otp", authController.verifyResetCode);
router.post("/reset-password", authController.resetPassword);

router.get("/profile",  authMiddleware, authController.profile);

module.exports = router;