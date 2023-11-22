"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const { REDIS_URL, REDIS_PORT, SESSION_SECRET } = config_1.default;
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const connectDB_1 = require("./db/connectDB");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Trusting NGINX proxie
app.enable("trust proxy");
app.use(express_1.default.json());
(0, connectDB_1.connectDb)();
app.get("/api/v1", (req, res) => {
    res.send("Hi Mom");
    console.log("it ran!");
});
app.use("/api/v1/posts", postRoutes_1.default);
app.use("/api/v1/users", userRoutes_1.default);
const start = async () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
};
start();
