const Post = require("../models/post.model");

const PostController = {
  create: async (req, res) => {
    const data = req.body;
    const post = await Post.create(data);
    await post.save();
    res.send(post);
  },
  update: async (req, res) => {
    const newPost = req.body;
    Post.findByIdAndUpdate(req.params.id, newPost).then((data) =>
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

module.exports = PostController;
