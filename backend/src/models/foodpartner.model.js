// const mongoose = require('mongoose');

// const foodPartnerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     // contactName: {
//     //     type: String,
//     //     required: true
//     // },
//     phone: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// const foodPartnerModel = mongoose.model("foodpartner", foodPartnerSchema);

// module.exports = foodPartnerModel;
const mongoose = require("mongoose");

const foodPartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const foodPartnerModel = mongoose.model("foodPartner", foodPartnerSchema);

module.exports = foodPartnerModel;