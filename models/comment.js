const {Model, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model {}

comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key:'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "newPost",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment"
    }
);

module.exports = Comment;
