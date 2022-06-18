"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.no_jQuery = void 0;
const log_1 = require("./log");
function no_jQuery(className) {
    // @ts-expect-error
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        // @ts-expect-error
        elements[0].parentNode.removeChild(elements[0]);
    }
    (0, log_1.log)("Removed flag alert without jQuery");
}
exports.no_jQuery = no_jQuery;
//# sourceMappingURL=no_jQuery.js.map