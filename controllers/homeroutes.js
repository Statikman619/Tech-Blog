const router = require("express").Router();
const { Article, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Renders articles on homepage
router.get("/", async (req, res) => {
  try {
    // Get all Articles and JOIN with user data
    const articleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ["user_name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const articles = articleData.map((article) => article.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      articles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
