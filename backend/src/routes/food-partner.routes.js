// const express = require('express');
// const foodPartnerController = require("../controllers/food-partner.controller");
// const authMiddleware = require("../middlewares/auth.middleware");

// const router = express.Router();


// /* /api/food-partner/:id */
// router.get("/:id",
//     authMiddleware.authUserMiddleware,
//     foodPartnerController.getFoodPartnerById)

// module.exports = router;
const express = require("express");
const foodPartnerController = require("../controllers/food-partner.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();


// /api/food-partner/:id
// router.get(
//   "/:id",
//   authMiddleware.authUserMiddleware,
//   foodPartnerController.getFoodPartnerById
// );
router.get(
  "/:id",
  foodPartnerController.getFoodPartnerById
);

module.exports = router;