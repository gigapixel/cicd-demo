"use strict";
exports.__esModule = true;
exports.app = void 0;
var express_1 = require("express");
exports.app = (0, express_1["default"])();
exports.app.get('/', function (req, res) {
    res.send('Express + TypeScript Server (v1.0.0)');
});
