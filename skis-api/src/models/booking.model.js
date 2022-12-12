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
  posts: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Booking", bookingModel);
