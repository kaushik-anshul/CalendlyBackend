import {app} from "./app.js";
import { PORT } from "./config/env.js";

export function startServer() {
    app.listen(PORT, ()=> {
        console.log(`[SERVER] is running on Port : ${PORT}`);
    });
}

startServer();