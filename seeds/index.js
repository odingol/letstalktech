const sequelize = require('../config/connection');
const seedNewPost  = require('./userData');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedNewPost();

    process.exit(0);
};

seedAll();