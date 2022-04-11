const User = require('./user');
const newPost = require('./newPost');
const comment = require('./comment');

User.hasMany(newPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

newPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {User, newPost, comment}

