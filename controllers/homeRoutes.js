const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: { model: User },
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    if (req.session.logged_in === true) {
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
        order: [["createdAt", "DESC"]],
        include: { model: User },
      });

      const myPosts = postData.map((project) => project.get({ plain: true }));
      console.log("req.session: ", req.session);
      res.render("dashboard", { myPosts });
    } else {
      res.render("login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
