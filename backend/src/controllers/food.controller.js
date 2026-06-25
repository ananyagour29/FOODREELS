
const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");
const likeModel = require("../models/like.model");
const saveModel = require("../models/save.model");
// ================= CREATE FOOD =================
async function createFood(req, res) {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // 1. Check file exists
    if (!req.file) {
      return res.status(400).json({
        message: "Video file is required",
      });
    }

    // 2. Upload to storage (ImageKit / your service)
    let fileUploadResult;

    try {
      fileUploadResult = await storageService.uploadFile(
        req.file.buffer,
        uuid()
      );
    } catch (uploadError) {
      console.error("UPLOAD ERROR:", uploadError);
      return res.status(500).json({
        message: "File upload failed",
        error: uploadError.message,
      });
    }

    // 3. Create food entry in DB
    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: fileUploadResult.url,
      foodPartner: req.foodPartner?._id, // comes from auth middleware
    });

    return res.status(201).json({
      message: "Food created successfully",
      food: foodItem,
      foodPartnerId: req.foodPartner?._id,
    });
  } catch (error) {
    console.error("CREATE FOOD ERROR:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

// ================= GET ALL FOOD ITEMS =================
async function getFoodItems(req, res) {
  try {
    const foodItems = await foodModel.find({});

    return res.status(200).json({
      message: "Food items fetched successfully",
      foodItems,
    });
  } catch (error) {
    console.error("GET FOOD ITEMS ERROR:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
async function toggleLike(req, res) {
  try {
    const { foodId } = req.body;

    const food = await foodModel.findById(foodId);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    const alreadyLiked = food.likes.includes(req.user._id);

    if (alreadyLiked) {
      food.likes.pull(req.user._id);

      await likeModel.deleteOne({
        user: req.user._id,
        food: foodId,
      });

      await food.save();

      return res.json({
        message: "Unliked",
      });
    }

    food.likes.push(req.user._id);

    await likeModel.create({
      user: req.user._id,
      food: foodId,
    });

    await food.save();

    return res.json({
      message: "Liked",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}
async function toggleSave(req, res) {
  try {
    const { foodId } = req.body;

    const food = await foodModel.findById(foodId);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    const alreadySaved = food.savedBy.includes(req.user._id);

    if (alreadySaved) {
      food.savedBy.pull(req.user._id);

      await saveModel.deleteOne({
        user: req.user._id,
        food: foodId,
      });

      await food.save();

      return res.json({
        message: "Removed from save",
      });
    }

    food.savedBy.push(req.user._id);

    await saveModel.create({
      user: req.user._id,
      food: foodId,
    });

    await food.save();

    return res.json({
      message: "Saved",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}
async function getSavedVideos(req, res) {
  try {
    const savedVideos = await saveModel
      .find({ user: req.user._id })
      .populate("food");

    const videos = savedVideos.map((item) => item.food);

    return res.status(200).json({
      videos,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}

module.exports = {
  createFood,
  getFoodItems,
  toggleLike,
  toggleSave,
  getSavedVideos,
};