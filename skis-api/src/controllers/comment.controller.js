const Comment = require("../models/comment.model");
const Post = require("../models/post.model");

const CommentController = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const comment = await Comment.create(data);
      await comment.save();

      console.log(req.body);

      const post = await Post.findById(req.body.post);
      post.comments.push(comment);
      await post.save();

      res.send(comment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteComment = await Comment.findByIdAndDelete(req.params.id);
      res.send(deleteComment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAllByPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({ post: post._id });
      res.send(comments);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  },
};

module.exports = CommentController;
