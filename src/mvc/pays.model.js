const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Pays = db.define('pays', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },        
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
        // defaultValue: new Date().toISOString().slice(0, 10),
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Pays;
