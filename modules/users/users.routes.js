import { Router } from "express";
import { signup, signin } from "./users.controller.js";
import { checkEmailExist } from "../../middleware/checkEmailExist.js";
import { validateSignin } from "../../middleware/validateSignin.js";

const userRouter = Router();

userRouter.post("/signup", checkEmailExist, signup);
userRouter.post("/signin", validateSignin, signin);

export default userRouter;
