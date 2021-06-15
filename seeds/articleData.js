const { Article } = require("../models");

const articleData = [
  {
    title: "Comics and Anime",
    content: "This is the launch of my new blog!",
    author_id: 1,
  },
  {
    title: "Is Spider-Man the best superhero ever?",
    content: "Some people prefer Superman but they might be wrong",
    author_id: 2,
  },
  {
    title: "Is Goku the strongest Anime character?",
    content: "He may not be the strongest but he has the most potential?",
    author_id: 3,
  },
];

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;
