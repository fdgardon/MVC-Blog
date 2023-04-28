const sequelize = require('../config/connection');
const { User } = require('../models');
const seedBlog = require('./BlogData');

const userData = require('./userData.json');
console.log(userData);
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  

  

  process.exit(0);
};

seedDatabase();