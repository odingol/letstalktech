const { newPost } = require('../models');

const postData = [
    {
        title: "Why testing code is important",
        content: "Less likely to solve bugs and it is simple and easy to read!",
        user_id: 1 
    },
    {
        title: "What makes Sequelize so great?",
        content: "Makes it easier for developers to write less code. One of the nice advantages of ORM!",
        user_id: 2
    }
];

const seedNewPost = () => newPost.bulkCreate(postData);

module.exports = seedNewPost;