const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingModel = new Schema({
  telephoneNumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
  }
});

module.exports = mongoose.model("Booking", bookingModel);
