import { Router } from "express";
import { createUser as createUserController, 
    deleteUser as deleteUserController, 
    findAllUsers as findAllUsersController, 
    findById as findByIdController, 
    updateUser as updateUserController} from "../controllers/user.controller.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.dto.js";
import { validate } from "../middlewares/validate.js";

export const userRouter : Router = Router();

userRouter.get('/', findAllUsersController);
userRouter.get('/:id', findByIdController);
userRouter.post('/', validate(createUserSchema), createUserController);
userRouter.patch('/:id', validate(updateUserSchema), updateUserController);
userRouter.delete('/:id', deleteUserController)