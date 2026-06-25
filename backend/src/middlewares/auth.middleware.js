
const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


// ================= FOOD PARTNER AUTH =================
async function authFoodPartnerMiddleware(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const foodPartner = await foodPartnerModel.findById(decoded.id);

    if (!foodPartner) {
      return res.status(401).json({
        message: "Food partner not found",
      });
    }

    req.foodPartner = foodPartner;
    next();

  } catch (err) {
    console.error("FOOD PARTNER AUTH ERROR:", err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}


// ================= USER AUTH =================
async function authUserMiddleware(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;
    next();

  } catch (err) {
    console.error("USER AUTH ERROR:", err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}


module.exports = {
  authFoodPartnerMiddleware,
  authUserMiddleware,
};