const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class newPost extends Model {}

newPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'newPost'
    }
)

module.exports = newPost;

