const router = require("express").Router();
const { User, Article, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const articleData = await Comment.findAll();

    res.status(200).json(articleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log("here line 16================================");
  try {
    const articleData = await Comment.create({
      comment: req.body.body,
      post_id: req.body.postId,
      commenter_id: req.session.user_id,
    });
    console.log(articleData);
    res.status(200).json(articleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
