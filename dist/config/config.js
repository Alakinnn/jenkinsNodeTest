"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = {
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    // referring to the service's name
    MONGO_IP: process.env.MONGO_IP || "database",
    REDIS_URL: process.env.REDIS_URL || "redis",
    REDIS_PORT: 6379,
    SESSION_SECRET: process.env.SESSION_SECRET
};
exports.default = env;
