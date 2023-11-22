import express, {Application, Request, Response, json} from "express"
type req = Request
type res = Response

import postRouter from "./routes/postRoutes"
import {connectDb} from "./db/connectDB"
import userRouter from "./routes/userRoutes"
import cors from "cors"
const PORT =  process.env.PORT || 3000
const app: Application = express()
// Trusting NGINX proxie
app.enable("trust proxy")
app.use(cors())
app.use(express.json())
connectDb();

app.get("/api/v1", (req: req, res: res) => {
    res.send("Hi Mom")
    console.log("it ran!");
    
})

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

const start = async () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
}
start()