const express = require("express");
const router = express.Router();
const { createPostController } = require("../controllers/post.controller");
const authMiddleware = require("../middleware/auth.middleware");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });


router.post("/", authMiddleware, upload.single("image"), createPostController);
// router.get("/:id", postController.getPostById);
// router.post("/", authMiddleware, postController.createPost);
// router.put("/:id", authMiddleware, postController.updatePost);
// router.delete("/:id", authMiddleware, postController.deletePost);

module.exports = router;