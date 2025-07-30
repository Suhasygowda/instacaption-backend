require("dotenv").config();
const cluster = require("cluster");
const os = require("os");
const app = require("./src/app");
const connectDB = require("./src/db/db");

const PORT = process.env.PORT;

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master ${process.pid} is running`);
    console.log(`Starting ${numCPUs} workers...`);

    // Fork workers for each CPU core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Restart worker if it dies
    cluster.on("exit", (worker) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });
} else {
    // Worker process
    (async () => {
        try {
            await connectDB();

            const server = app.listen(PORT, () => {
                console.log(`Worker ${process.pid} running on port ${PORT}`);
            });

            // Graceful shutdown
            const shutdown = async (signal) => {
                console.log(`\n${signal} received. Shutting down worker ${process.pid}...`);
                server.close(async () => {
                    console.log(`Worker ${process.pid} closed server.`);
                    process.exit(0);
                });

                // Force exit if not closed within 5s
                setTimeout(() => {
                    console.warn("Forcing shutdown...");
                    process.exit(1);
                }, 5000);
            };

            process.on("SIGINT", () => shutdown("SIGINT"));
            process.on("SIGTERM", () => shutdown("SIGTERM"));

        } catch (error) {
            console.error("Worker failed to start:", error);
            process.exit(1);
        }
    })();
}
