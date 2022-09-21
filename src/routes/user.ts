import express from "express";
import UserController from "../controllers/user";
const userRouter = express.Router();

userRouter.post("/login", UserController.Login);
userRouter.post("/register", UserController.Register);
userRouter.get("/", UserController.get);

export default userRouter;
