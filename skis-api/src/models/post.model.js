const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
