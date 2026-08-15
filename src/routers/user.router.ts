import { Router } from "express";
import { findAllUsers as findAllUsersController, findById as findByIdController} from "../controllers/user.controller.js";

export const userRouter : Router = Router();

userRouter.get('/', findAllUsersController);
userRouter.get('/:id', findByIdController);