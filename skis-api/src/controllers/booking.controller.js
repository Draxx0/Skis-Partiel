const Booking = require("../models/booking.model");
const Shop = require("../models/shop.model");
const Post = require("../models/post.model");

const BookingController = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const booking = await Booking.create(data);
      await booking.save();

      const post = await Post.findById(req.body.post);
      post.bookings.push(booking);
      if (post.bookings.length > 0) {
        post.isAvailable = false;
      }
      await post.save();

      const shop = await Shop.findById(req.body.shop);
      shop.bookings.push(booking);
      await shop.save();

      res.send(booking);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteBooking = await Booking.findByIdAndDelete(req.params.id);
      res.send(deleteBooking);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAllBookingByPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const bookings = await Booking.find({ post: post._id });
      res.send(bookings);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  },
};

module.exports = BookingController;
