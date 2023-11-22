"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoURL = exports.connectDb = void 0;
const config_1 = __importDefault(require("../config/config"));
const mongoose = require("mongoose");
const mongoURL = `mongodb://${config_1.default.MONGO_USERNAME}:${config_1.default.MONGO_PASSWORD}@${config_1.default.MONGO_IP}:${config_1.default.MONGO_PORT}/?authSource=admin`;
exports.mongoURL = mongoURL;
const connectDb = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("DB connected");
    }
    catch (e) {
        console.log(e);
    }
};
exports.connectDb = connectDb;
