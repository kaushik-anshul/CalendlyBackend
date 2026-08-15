import { Router } from "express";
import { findAllUsers as findAllUsersController} from "../controllers/user.controller.js";

export const userRouter : Router = Router();

userRouter.get('/', findAllUsersController);