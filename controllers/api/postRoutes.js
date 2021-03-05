const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({});
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    var newPost = req.body;
    newPost.user_id = req.session.user_id;
    const postData = await Post.create(newPost);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update posts on dashboard
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = req.body;
    const postData = await Post.update(updatedPost);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
