import { Router } from "express";
import {
  addPost,
  deleteUser,
  getAllPosts,
  getSinglePost,
  getUserPosts,
  updateUser,
} from "./posts.controller.js";

const postsRouter = Router();
postsRouter.route("/").post(addPost).get(getAllPosts);
postsRouter.route("/:id").get(getSinglePost).put(updateUser).delete(deleteUser);
postsRouter.get("/me/:id", getUserPosts);

export default postsRouter;
