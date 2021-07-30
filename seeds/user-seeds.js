const { User } = require("../models");

const userData = [
  {
    username: "Lorem",
    email: "Lorem@ipsum.com",
    password: "password1",
  },
  {
    username: "Lorem1",
    email: "lorem1@ipsum.com",
    password: "password2",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
