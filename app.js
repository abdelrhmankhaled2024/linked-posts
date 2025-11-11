import express from "express";
import userRouter from "./modules/users/users.routes.js";
import postsRouter from "./modules/posts/posts.routes.js";
import cors from "cors";

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/auth", userRouter);
app.use("/posts", postsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
