"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.createPosts = exports.updatePost = exports.getOnePost = exports.getAllPosts = void 0;
const postSchema_1 = require("../models/postSchema");
const getAllPosts = async (req, res) => {
    try {
        const allPosts = await postSchema_1.Post.find();
        res.status(200).json({
            allPosts
        });
    }
    catch (e) {
        res.status(400).json({
            e
        });
    }
};
exports.getAllPosts = getAllPosts;
const getOnePost = async (req, res) => {
    try {
        const post = await postSchema_1.Post.findById(req.params.id).exec();
        res.status(200).json({
            post
        });
    }
    catch (e) {
        res.status(400).json({
            e
        });
    }
};
exports.getOnePost = getOnePost;
const updatePost = async (req, res) => {
    try {
        const post = await postSchema_1.Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).exec();
        post;
        res.status(200).json({
            post
        });
    }
    catch (e) {
        res.status(400).json({
            e
        });
    }
};
exports.updatePost = updatePost;
const createPosts = async (req, res) => {
    try {
        const post = await postSchema_1.Post.create(req.body);
        res.status(200).json({
            post
        });
    }
    catch (e) {
        res.status(400).json({
            e
        });
    }
};
exports.createPosts = createPosts;
const deletePost = async (req, res) => {
    try {
        await postSchema_1.Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Deleted Post"
        });
    }
    catch (e) {
        res.status(400).json({
            e
        });
    }
};
exports.deletePost = deletePost;
