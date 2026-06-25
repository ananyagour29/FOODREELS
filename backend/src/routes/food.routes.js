
const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});


// ================= CREATE FOOD =================
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);


// ================= GET ALL FOOD =================
router.get(
  "/",
  foodController.getFoodItems
);


// ================= LIKE FOOD =================
router.post(
  "/like",
  authMiddleware.authUserMiddleware,
  foodController.toggleLike
);


// ================= SAVE FOOD =================
router.post(
  "/save",
  authMiddleware.authUserMiddleware,
  foodController.toggleSave
);

router.get(
  "/saved",
  authMiddleware.authUserMiddleware,
  foodController.getSavedVideos
);
module.exports = router;