"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use_jQuery = void 0;
const log_1 = require("./log");
function use_jQuery(className) {
    $("." + className).remove();
    (0, log_1.log)("Removed flag alert using jQuery");
}
exports.use_jQuery = use_jQuery;
//# sourceMappingURL=use_jQuery.js.map