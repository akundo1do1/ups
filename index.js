const server = require("./server/core");
const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle uncaught errors
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    process.exit(1);
});

process.on("unhandledRejection", (error) => {
    console.error("Unhandled Rejection:", error);
    process.exit(1);
});
