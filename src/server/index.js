"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// security
const cors_1 = require("cors");
const helmet_1 = require("helmet");
// Root Router
const routes_1 = require("../routes");
// create express server
const server = (0, express_1.default)();
// define server to use "/api" and use rootRouter from 'index.ts' in routes
server.use('/api', routes_1.default);
// security config
server.use((0, helmet_1.default)());
server.use((0, cors_1.default)());
// content type
server.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(express_1.default.json({ limit: '50mb' }));
// redirection config
// http://localhost:8000/ ------> http://localhost:8000/api
server.get('/', (req, res) => {
    res.redirect('/api');
});
exports.default = server;
