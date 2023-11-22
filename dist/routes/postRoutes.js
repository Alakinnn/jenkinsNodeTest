"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postController_1 = require("../controller/postController");
const express_1 = __importDefault(require("express"));
const postRouter = express_1.default.Router();
postRouter.route("/").get(postController_1.getAllPosts).post(postController_1.createPosts);
postRouter.route("/:id").get(postController_1.getOnePost).patch(postController_1.updatePost).delete(postController_1.deletePost);
exports.default = postRouter;
