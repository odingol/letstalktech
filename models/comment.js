const {Model, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class comment extends Model {}

comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        note: {
            type: Datatypes.TEXT,
            allowNull: false
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

module.exports = comment;
