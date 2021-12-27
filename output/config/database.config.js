"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node_mysql_db', 'root', '', {
    storage: './database.mysql',
    dialect: 'mysql',
    logging: false
});
exports.default = db;
