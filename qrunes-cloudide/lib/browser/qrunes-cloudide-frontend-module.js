"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const browser_1 = require("@theia/core/lib/browser");
require("../../src/browser/style/index.css");
const userinfo_contribution_1 = require("./widget/title/userinfo-contribution");
const userinfo_widget_1 = require("./widget/title/userinfo-widget");
const protocol_1 = require("../node/common/protocol");
const welcome_page_contribution_1 = require("./widget/welcome/welcome-page-contribution");
const core_1 = require("@theia/core");
const welcome_page_widget_1 = require("./widget/welcome/welcome-page-widget");
const frontend_about_1 = require("./about/frontend-about");
const about_contribution_1 = require("./about/about-contribution");
const about_service_1 = require("../common/about/about-service");
const prompt_contribution_1 = require("./widget/prompt/prompt-contribution");
const prompt_widget_1 = require("./widget/prompt/prompt-widget");
exports.default = new inversify_1.ContainerModule(bind => {
    // bind UserInfo widget
    (0, browser_1.bindViewContribution)(bind, userinfo_contribution_1.UserInfoContribution);
    bind(browser_1.FrontendApplicationContribution).toService(userinfo_contribution_1.UserInfoContribution);
    bind(userinfo_widget_1.UserInfoWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: userinfo_widget_1.UserInfoWidget.ID,
        createWidget: () => ctx.container.get(userinfo_widget_1.UserInfoWidget)
    })).inSingletonScope();
    // bind welcome page widget
    (0, browser_1.bindViewContribution)(bind, welcome_page_contribution_1.WelcomePageContribution);
    bind(core_1.CommandContribution).toService(welcome_page_contribution_1.WelcomePageContribution);
    //      bind(MenuContribution).toService(WelcomePageContribution);
    bind(browser_1.FrontendApplicationContribution).toService(welcome_page_contribution_1.WelcomePageContribution);
    bind(welcome_page_widget_1.WelComePageWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(context => ({
        id: welcome_page_widget_1.WelComePageWidget.ID,
        createWidget: () => context.container.get(welcome_page_widget_1.WelComePageWidget)
    })).inSingletonScope();
    // bind prompt
    (0, browser_1.bindViewContribution)(bind, prompt_contribution_1.PromptContribution);
    bind(browser_1.FrontendApplicationContribution).toService(prompt_contribution_1.PromptContribution);
    bind(prompt_widget_1.PromptWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: prompt_widget_1.PromptWidget.ID,
        createWidget: () => ctx.container.get(prompt_widget_1.PromptWidget)
    })).inSingletonScope();
    // bind about
    bind(frontend_about_1.about).to(frontend_about_1.FrotendAbout).inSingletonScope();
    bind(about_contribution_1.AboutContribution).toSelf().inSingletonScope();
    bind(core_1.CommandContribution).toService(about_contribution_1.AboutContribution);
    bind(core_1.MenuContribution).toService(about_contribution_1.AboutContribution);
    // bind logger
    bind(core_1.ILogger).toDynamicValue(ctx => {
        const logger = ctx.container.get(core_1.ILogger);
        return logger.child(about_service_1.aboutLoggerName);
    }).inSingletonScope().whenTargetNamed(about_service_1.aboutLoggerName);
    // connect about backend
    bind(about_service_1.aboutServiceSymbol).toDynamicValue(context => {
        const provider = context.container.get(browser_1.WebSocketConnectionProvider);
        return provider.createProxy(about_service_1.aboutServicePath);
    }).inSingletonScope();
    // connect userinfo backend
    bind(protocol_1.BackendClient).to(BackendClientImpl).inSingletonScope();
    bind(protocol_1.UserInfoBackendService).toDynamicValue(ctx => {
        const connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        return connection.createProxy(protocol_1.USER_INFO_BACKEND_PATH);
    }).inSingletonScope();
    // connect backend callback client example
    bind(protocol_1.UserInfoBackendWithClientService).toDynamicValue(ctx => {
        const connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        const backendClient = ctx.container.get(protocol_1.BackendClient);
        return connection.createProxy(protocol_1.USER_INFO_BACKEND_WITH_CLIENT_PATH, backendClient);
    }).inSingletonScope();
});
let BackendClientImpl = class BackendClientImpl {
    getName() {
        return new Promise(resolve => resolve('client'));
    }
};
BackendClientImpl = __decorate([
    (0, inversify_1.injectable)()
], BackendClientImpl);
//# sourceMappingURL=qrunes-cloudide-frontend-module.js.map