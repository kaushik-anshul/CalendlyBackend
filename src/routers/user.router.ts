import { Router } from "express";
import { createUser as createUserController, findAllUsers as findAllUsersController, findById as findByIdController} from "../controllers/user.controller.js";
import { createUserSchema } from "../dtos/user.dto.js";
import { validate } from "../middlewares/validate.js";

export const userRouter : Router = Router();

userRouter.get('/', findAllUsersController);
userRouter.get('/:id', findByIdController);
userRouter.post('/', validate(createUserSchema), createUserController);