"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
exports.app = app;
app.get(routes_1.routes.home, function (req, res) {
    res.send("aaaaa");
});
app.get(routes_1.routes.users, function (req, res) {
    res.send("users");
});
app.get(routes_1.routes.login, function (req, res) {
    res.send("login");
});
