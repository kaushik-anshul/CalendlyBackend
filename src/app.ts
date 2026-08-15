import express, {type Express} from "express";
import { userRouter } from "./routers/user.router.js";

const app : Express = express();

app.get("/health", (_req, res) => {
    res.json({
        status : "OK",
        timestamp : new Date().toISOString()
    });
});

app.use('/users', userRouter);

export {app};