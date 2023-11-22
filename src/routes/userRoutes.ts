import express from "express"
import { logIn, signUp } from "../controller/authController"
const userRouter = express.Router()

userRouter.route("/signup").post(signUp)
userRouter.route("/login").post(logIn)

export default userRouter