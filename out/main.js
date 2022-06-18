"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const log_1 = require("./log");
const constants_1 = require("./constants");
const no_jQuery_1 = require("./no_jQuery");
const use_jQuery_1 = require("./use_jQuery");
// @ts-expect-error
function main(args) {
    try {
        (0, use_jQuery_1.use_jQuery)(constants_1.TARGET);
    }
    catch (e) {
        (0, log_1.log)("jQuery failed. Using non-jQuery approach.");
        (0, no_jQuery_1.no_jQuery)(constants_1.TARGET);
    }
    (0, log_1.log)("Done!");
}
exports.main = main;
//# sourceMappingURL=main.js.map