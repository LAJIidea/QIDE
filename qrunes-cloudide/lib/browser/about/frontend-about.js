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
exports.FrotendAbout = exports.about = void 0;
const window_service_1 = require("@theia/core/lib/browser/window/window-service");
const inversify_1 = require("inversify");
const about_service_1 = require("../../common/about/about-service");
const application_protocol_1 = require("@theia/core/lib/common/application-protocol");
const core_1 = require("@theia/core");
const brand_1 = require("../../common/brand");
const message_dialog_1 = require("../core/message-dialog");
exports.about = Symbol("about");
let FrotendAbout = class FrotendAbout {
    constructor(aboutService, windowService, appServer, logger) {
        this.aboutService = aboutService;
        this.windowService = windowService;
        this.appServer = appServer;
        this.logger = logger;
        this.reportIssueMessage = `Report an issue to help us improve ${(0, brand_1.getProductName)()}.`;
    }
    async init() {
        this.applicationInfo = await this.appServer.getApplicationInfo();
    }
    async reportIssue() {
        this.logger.info("Opening feedback dialog");
        const dialogContent = document.createElement("div");
        this.logPlatform();
        dialogContent.appendChild(this.createParagraph(this.reportIssueMessage));
        const openLogLink = await this.createOpenLogLink();
        dialogContent.appendChild(openLogLink);
        const dialog = new message_dialog_1.MessageDialog(dialogContent, "Report an issue or provide feedback", "Report Issue");
        const acceptButton = dialog.getPrimaryButton();
        // todo 加上社区地址
        acceptButton.addEventListener("click", () => this.openLink(""), false);
        dialog.open();
    }
    async openDocs() {
        this.openLink("");
    }
    openForum() {
        this.openLink("https://forum.originqc.com.cn/rostrum/index.html");
    }
    about() {
        this.logger.info(`Displaying information about ${(0, brand_1.getProductName)()} browser`);
        this.aboutService.getInfo().then((value) => {
            console.log(value.licensePath);
            this.showDialog(value);
        });
    }
    showDialog(info) {
        var _a;
        const dialogContent = document.createElement("div");
        dialogContent.appendChild(this.createLogo());
        if (this.applicationInfo) {
            dialogContent.appendChild(this.createParagraph(`${(0, brand_1.getProductName)()}: ${(_a = this.applicationInfo) === null || _a === void 0 ? void 0 : _a.version}`));
            console.log(this.applicationInfo.version);
        }
        if (info.additional) {
            dialogContent.appendChild(this.createParagraph(info.additional));
        }
        dialogContent.appendChild(this.createLink(`${(0, brand_1.getProductName)()} Documention`, info.licensePath));
        const dialog = new message_dialog_1.MessageDialog(dialogContent);
        dialog.open();
    }
    createLogo() {
        const element = document.createElement("img");
        element.id = "originq-about-logo";
        return element;
    }
    createLink(text, href) {
        const element = document.createElement("p");
        const anchor = document.createElement("a");
        anchor.innerText = text;
        anchor.href = href;
        anchor.target = "_blank";
        element.appendChild(anchor);
        anchor.addEventListener("click", event => {
            event.preventDefault();
            this.openLink(href);
        });
        return element;
    }
    createParagraph(text) {
        const element = document.createElement("p");
        element.innerText = text;
        return element;
    }
    openLink(href) {
        this.windowService.openNewWindow(href, { external: true });
    }
    async createOpenLogLink() {
        return document.createElement("div");
    }
    logPlatform() {
        if (this.applicationInfo) {
            this.logger.info(`${(0, brand_1.getProductName)()} version: ${this.applicationInfo.version}`);
        }
    }
};
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FrotendAbout.prototype, "init", null);
FrotendAbout = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(about_service_1.aboutServiceSymbol)),
    __param(1, (0, inversify_1.inject)(window_service_1.WindowService)),
    __param(2, (0, inversify_1.inject)(application_protocol_1.ApplicationServer)),
    __param(3, (0, inversify_1.inject)(core_1.ILogger)),
    __param(3, (0, inversify_1.named)(about_service_1.aboutLoggerName)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], FrotendAbout);
exports.FrotendAbout = FrotendAbout;
//# sourceMappingURL=frontend-about.js.map