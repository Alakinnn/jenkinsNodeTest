import {createPosts, deletePost, getAllPosts, getOnePost, updatePost} from "../controller/postController"
import express from "express"
const postRouter = express.Router()

postRouter.route("/").get(getAllPosts).post(createPosts)
postRouter.route("/:id").get(getOnePost).patch(updatePost).delete(deletePost)

export default postRouter