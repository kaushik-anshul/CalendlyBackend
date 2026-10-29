import express, {type Express} from "express";
import { userRouter } from "./routers/user.router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { routeNotFound } from "./middlewares/route-not-found.js";

const app : Express = express();

// for deseialization of the incoming request
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get("/health", (_req, res) => {
    res.json({
        status : "OK",
        timestamp : new Date().toISOString()
    });
});

app.use('/api/users', userRouter);


app.use(routeNotFound);
app.use(errorHandler); // the error handling middleware should be registered at last

export {app};