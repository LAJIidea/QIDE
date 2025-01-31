"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoBackendServiceImpl = void 0;
const inversify_1 = require("inversify");
const storageInfo_1 = require("../storage/storageInfo");
let UserInfoBackendServiceImpl = class UserInfoBackendServiceImpl {
    getUserInfo() {
        let containerId = storageInfo_1.localStorage.getItem('containerId');
        let userName = storageInfo_1.localStorage.getItem('userName');
        let data = JSON.stringify({ 'userName': userName, 'instanceId': containerId });
        return new Promise(resolve => resolve(data));
    }
};
UserInfoBackendServiceImpl = __decorate([
    (0, inversify_1.injectable)()
], UserInfoBackendServiceImpl);
exports.UserInfoBackendServiceImpl = UserInfoBackendServiceImpl;
//# sourceMappingURL=userinfo-service.js.map