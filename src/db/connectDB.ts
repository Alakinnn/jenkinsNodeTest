import env from "../config/config"
const mongoose = require("mongoose")

const mongoURL = `mongodb://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_IP}:${env.MONGO_PORT}/?authSource=admin`

const connectDb = async () => {
  try {
    await mongoose.connect(mongoURL)
    console.log("DB connected");
  }
  catch(e) {
    console.log(e);
  }
}

export {connectDb, mongoURL}