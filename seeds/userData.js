const { User } = require("../models");

const userdata = [
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

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
