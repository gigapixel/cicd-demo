"use strict";
var _a;
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var app_1 = require("./app");
dotenv_1["default"].config();
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app_1.app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
