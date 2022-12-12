const Booking = require("../models/booking.model");

const BookingController = {
  create: async (req, res) => {
    const data = req.body;
    const booking = await Booking.create(data);
    await booking.save();
    res.send(post);
  },
  update: async (req, res) => {
    const updatedBooking = req.body;
    Booking.findByIdAndUpdate(req.params.id, updatedBooking).then((data) =>
      res.send(data)
    );
  },
  delete: async (req, res) => {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.send(deletePost);
  },
  getAll: async (req, res) => {
    const postList = await Post.find();
    res.send(postList);
  },
  getOne: async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.send(post);
  },
};

module.exports = BookingController;
