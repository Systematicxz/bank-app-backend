const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Transfer = db.define('transfers', {
  id: {
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1000,
  },
  senderUserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiverUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Transfer;
