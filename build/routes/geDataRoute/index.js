"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataRoute = void 0;
var express_1 = require("express");
var getData_1 = __importDefault(require("../../middleware/getData"));
var path = "/getdata";
var router = (0, express_1.Router)();
router.route(path).get(getData_1.default);
exports.getDataRoute = {
    path: path,
    router: router,
};
