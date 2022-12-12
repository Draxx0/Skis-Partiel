const express = require("express");
const CommentController = require("../controllers/comment.controller");
const router = express.Router();

const endPoint = "/comments";

router.post(`${endPoint}`, CommentController.create);
router.delete(`${endPoint}/:id`, CommentController.delete);
router.get(`${endPoint}/:id`, CommentController.getAllByPost);

module.exports = router;