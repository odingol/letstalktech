const User = require('./user');
const newPost = require('./newPost');
const Comment = require('./comment');

User.hasMany(newPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

newPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

newPost.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(newPost, {
    foreignKey: 'post_id'
})

module.exports = {User, newPost, Comment}

