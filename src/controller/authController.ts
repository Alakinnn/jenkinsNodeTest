import { User } from "../models/userSchema";
import { Request, Response } from "express";
import bcrypt from "bcrypt"

export const signUp = async (req: Request, res: Response) => {
  const {username, password} = req.body
  const hasedPassword = await bcrypt.hash(password, 12)
  try {
    await User.create(req.body)
    res.sendStatus(200)
  }
  catch(e) {
    res.sendStatus(400)
  }
}

export const logIn = async (req: Request, res: Response) => {
  const {username, password} = req.body
  try {
    const user = await User.findOne({username: username}).exec()
    if (!user) return res.sendStatus(404).json({message: "User does not exist"})
    
    const isValid = bcrypt.compare(password, user.password)
    if(!isValid) return res.sendStatus(400)

    res.status(201).json({message: "Logged in"})
  }
  catch (e) {
    console.log(e);
  }
}