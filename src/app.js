const { Server } = require("@grpc/grpc-js");
const { grpcErrorHandler } = require("./middlewares/grpcErrorHandlerMiddleware");
// const initializeConsumers = require("./rabbitmq/initialize");

const server = new Server();

grpcErrorHandler(server);
// initializeConsumers().then(() => console.log("🐇 Consumers ready"));

module.exports = server;
