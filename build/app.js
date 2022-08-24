"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8070;
var initializeRoutes = function (routes) {
    routes.forEach(function (route) {
        app.use("/api/v1/", route.router);
    });
};
app.listen(PORT, function () {
    initializeRoutes(routes_1.default);
    console.log("server is running on PORT", PORT);
});
