import {app} from "./app.js";
import { connectDatabase } from "./config/database.js";
import { PORT } from "./config/env.js";

async function startServer() {
    await connectDatabase();
    app.listen(PORT, ()=> {
        console.log(`[Server] is running on Port : ${PORT}`);
    });
}

startServer().catch((err) => console.error("[Server] failed to start", err))