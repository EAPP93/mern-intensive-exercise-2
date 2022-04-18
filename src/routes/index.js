"use strict";
/**
 * Root Router
 * Redirection to Routers
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
const express_1 = require("express");
const HelloRouter_1 = require("./HelloRouter");
// server instance
const server = (0, express_1.default)();
// router instance
const rootRouter = express_1.default.Router();
// Activate for requests to http://localhost:8000/api
// Get: http://localhost:8000/api
rootRouter.get('/', (req, res) => {
    (0, logger_1.LogInfo)('Get: http://localhost:8000/api');
    // Send Hello World
    res.send('Welcome to my api restful: express + typescript + Nodemon');
});
// Redirections to Routers & Controllers
server.use('/', rootRouter);
server.use('/hello', HelloRouter_1.default);
exports.default = server;
