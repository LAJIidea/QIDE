"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudIdeBackendContribution = void 0;
const inversify_1 = require("inversify");
const storageInfo_1 = require("../storage/storageInfo");
let CloudIdeBackendContribution = class CloudIdeBackendContribution {
    constructor() { }
    configure(app) {
        app.get('/cloudidebackend', (req, res) => {
            let username = req.body.username;
            let userId = req.body.userId;
            let containerId = req.body.containerId;
            let userInfo = { 'username': username, 'userId': userId, 'containerId': containerId };
            storageInfo_1.localStorage.setItem('userInfo', JSON.stringify(userInfo));
            res.json({ 'code': 0 });
        });
        app.get('/getUserInfo', (req, res) => {
            let userInfo = storageInfo_1.localStorage.getItem('userInfo');
            res.json(JSON.parse(userInfo));
        });
        app.get('/getContainerId', (req, res) => {
            let containerId = storageInfo_1.localStorage.getItem('containerId');
            res.json({ 'containerId': containerId });
        });
        app.get('/activity', (req, res) => {
            console.log("收到请求");
            storageInfo_1.localStorage.setItem('activityTime', Date.now());
            res.json({ 'code': 0 });
        });
    }
    onStart(server) {
        let address = server.address();
        console.log(address);
        storageInfo_1.localStorage.setItem('address', address);
    }
};
CloudIdeBackendContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], CloudIdeBackendContribution);
exports.CloudIdeBackendContribution = CloudIdeBackendContribution;
//# sourceMappingURL=cloudide-backend-contribution.js.map