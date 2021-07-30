const seedBlogs = require("./blog-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log("\n==== Users Seed ====\n");

  await seedBlogs();
  console.log("\n==== Blogs Seed =====\n");

  process.exit(0);
};

seedAll();
