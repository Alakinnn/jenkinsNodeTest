import { Post } from "../models/postSchema";
import { Response, Request, NextFunction} from "express";
type req = Request
type res = Response
type next = NextFunction
export const getAllPosts = async (req:req, res: res) => {
  try {
    const allPosts = await Post.find()
    res.status(200).json({
      allPosts
    })
  }
  catch(e) {
    res.status(400).json({
      e
    })
  }
}

export const getOnePost = async (req:req, res: res) => {
  try {
    const post = await Post.findById(req.params.id).exec()
    res.status(200).json({
      post
    })
  }
  catch(e) {
    res.status(400).json({
      e
    })
  }
}

export const updatePost = async (req:req, res: res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new:true
    }).exec()
    post
    res.status(200).json({
      post
    })
  }
  catch(e) {
    res.status(400).json({
      e
    })
  }
}

export const createPosts = async (req:req, res: res) => {
  try {
    const post = await Post.create(req.body)
    res.status(200).json({
      post
    })
  }
  catch(e) {
    res.status(400).json({
      e
    })
  }
}

export const deletePost = async (req:req, res: res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message:"Deleted Post"
    })
  }
  catch(e) {
    res.status(400).json({
      e
    })
  }
}