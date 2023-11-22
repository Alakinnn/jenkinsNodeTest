"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.signUp = void 0;
const userSchema_1 = require("../models/userSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp = async (req, res) => {
    const { username, password } = req.body;
    const hasedPassword = await bcrypt_1.default.hash(password, 12);
    try {
        await userSchema_1.User.create(req.body);
        res.sendStatus(200);
    }
    catch (e) {
        res.sendStatus(400);
    }
};
exports.signUp = signUp;
const logIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userSchema_1.User.findOne({ username: username }).exec();
        if (!user)
            return res.sendStatus(404).json({ message: "User does not exist" });
        const isValid = bcrypt_1.default.compare(password, user.password);
        if (!isValid)
            return res.sendStatus(400);
        res.status(201).json({ message: "Logged in" });
    }
    catch (e) {
        console.log(e);
    }
};
exports.logIn = logIn;
