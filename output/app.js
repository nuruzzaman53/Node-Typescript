"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Project Name : CRUD application using ExpressJS with MySQL
    Version: 1.0.0
    Author: Nuruzzaman
    Date: 11-12-2021

*/
const express_1 = __importDefault(require("express"));
//import mongoose from 'mongoose'
const Routes_1 = __importDefault(require("./routes/Routes"));
const PostRoute_1 = __importDefault(require("./routes/PostRoute"));
const database_config_1 = __importDefault(require("./config/database.config"));
const app = (0, express_1.default)();
/*mongoose.connect('mongodb://localhost:27017/NodeTSAPI',() => {
    console.log('Mongoose Database Connection Successful')
})*/
app.use(express_1.default.json());
app.use('/api', Routes_1.default); /* API using MongoDB */
app.use('/post', PostRoute_1.default); /* API using MySQL with Sqeuelize */
database_config_1.default.sync().then(() => {
    console.log('DB Connected');
});
app.listen(4500, () => {
    console.log('App is listening on port 4500');
});
