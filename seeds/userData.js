const { User } = require("../models");

const userData = [
  {
    user_name: "Spider-Man",
    password: "Spider_man123!",
  },
  {
    user_name: "SonGoku",
    password: "KameKame1!",
  },
  {
    user_name: "Super_Man",
    password: "ClarkKent1!",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
