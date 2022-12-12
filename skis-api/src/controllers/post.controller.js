const Post = require("../models/post.model");

const PostController = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const post = await Post.create(data);
      await post.save();
      res.send(post);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const newPost = req.body;
      Post.findByIdAndUpdate(req.params.id, newPost).then((data) =>
        res.send(data)
      );
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deletePost = await Post.findByIdAndDelete(req.params.id);
      res.send(deletePost);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const postList = await Post.find()
        .populate("comments")
        .populate("bookings");
      res.send(postList);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
        .populate("comments")
        .populate("bookings");
      res.send(post);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  },
};

module.exports = PostController;
