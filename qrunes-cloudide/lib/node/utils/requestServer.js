"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.post = void 0;
const axios_1 = require("axios");
async function post(param, url) {
    let result;
    await (0, axios_1.default)({
        method: 'post',
        url: url,
        data: param
    }).then(response => {
        result = response;
    });
    return result;
}
exports.post = post;
async function get(url) {
    let result;
    await (0, axios_1.default)({
        method: 'get',
        url: url,
    }).then(response => {
        result = response;
    });
    return result;
}
exports.get = get;
//# sourceMappingURL=requestServer.js.map