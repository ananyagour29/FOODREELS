// const foodPartnerModel = require('../models/foodpartner.model');
// const foodModel = require('../models/food.model');

// async function getFoodPartnerById(req, res) {

//     const foodPartnerId = req.params.id;

//     const foodPartner = await foodPartnerModel.findById(foodPartnerId)
//     const foodItemsByFoodPartner = await foodModel.find({ foodPartner: foodPartnerId })

//     if (!foodPartner) {
//         return res.status(404).json({ message: "Food partner not found" });
//     }

//     res.status(200).json({
//         message: "Food partner retrieved successfully",
//         foodPartner: {
//             ...foodPartner.toObject(),
//             foodItems: foodItemsByFoodPartner
//         }

//     });
// }

// module.exports = {
//     getFoodPartnerById
// };
const foodPartnerModel = require("../models/foodpartner.model");
const foodModel = require("../models/food.model");

async function getFoodPartnerById(req, res) {
  try {
    const foodPartnerId = req.params.id;

    if (!foodPartnerId) {
      return res.status(400).json({ message: "Food partner id is required" });
    }

    const foodPartner = await foodPartnerModel.findById(foodPartnerId);

    if (!foodPartner) {
      return res.status(404).json({ message: "Food partner not found" });
    }

    const foodItemsByFoodPartner = await foodModel.find({
      foodPartner: foodPartnerId,
    });

    return res.status(200).json({
      message: "Food partner retrieved successfully",
      foodPartner: {
        ...foodPartner.toObject(),
        foodItems: foodItemsByFoodPartner,
      },
    });

  } catch (error) {
    console.error("GET FOOD PARTNER ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getFoodPartnerById,
};