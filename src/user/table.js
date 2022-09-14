const { DataTypes } = require("sequelize");
const { sequelize } = require('../db/connection');

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    // },
});

module.exports = User;