const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./project/router");
const tasksRouter = require("./task/router");
const resourcesRouter = require("./resource/router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

//eslint-disable-next-line
server.use((error, request, response, _next) => {
  response.status(error.status || 500).json({
    message: error.message || "server error"
  });
});

module.exports = server;
