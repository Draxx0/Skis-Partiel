const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Booking",
    },
  ]
});

module.exports = mongoose.model("Shop", shopSchema);
