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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoContribution = void 0;
const inversify_1 = require("inversify");
const browser_1 = require("@theia/core/lib/browser");
const userinfo_widget_1 = require("./userinfo-widget");
const protocol_1 = require("../../../node/common/protocol");
const infoStorage_1 = require("../../storage/infoStorage");
let UserInfoContribution = class UserInfoContribution extends browser_1.AbstractViewContribution {
    constructor(userInfoBackendService) {
        super({
            widgetId: userinfo_widget_1.UserInfoWidget.ID,
            widgetName: userinfo_widget_1.UserInfoWidget.LABEL,
            defaultWidgetOptions: { area: 'top' }
        });
        this.userInfoBackendService = userInfoBackendService;
    }
    init() {
        this.userInfoBackendService.getUserInfo().then(r => {
            infoStorage_1.frontendStorage.setItem('userinfo', r);
            this.openView({ activate: false });
        });
    }
    async onStart(app) {
        this.openView({ activate: false });
    }
};
__decorate([
    (0, inversify_1.inject)(browser_1.ApplicationShell),
    __metadata("design:type", browser_1.ApplicationShell)
], UserInfoContribution.prototype, "shell", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserInfoContribution.prototype, "init", null);
UserInfoContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(protocol_1.UserInfoBackendService)),
    __metadata("design:paramtypes", [Object])
], UserInfoContribution);
exports.UserInfoContribution = UserInfoContribution;
//# sourceMappingURL=userinfo-contribution.js.map