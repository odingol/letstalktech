const sequelize = require('../config/connection');
const seedUser  = require('./userData');
const seedNewPost = require('./newPostData');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUser();

    await seedNewPost();

    process.exit(0);
};

seedAll();