
// const mongoose = require('mongoose');

// const foodSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     video: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//     },
//     foodPartner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "foodpartner"
//     }

// })


// const foodModel = mongoose.model("food", foodSchema);


// module.exports = foodModel;
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  video: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodpartner",
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  savedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model("food", foodSchema);