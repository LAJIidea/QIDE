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
exports.WelcomePageContribution = exports.WelcomePageCommand = void 0;
const welcome_page_widget_1 = require("./welcome-page-widget");
const browser_1 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const inversify_1 = require("inversify");
const browser_2 = require("@theia/workspace/lib/browser");
const navigator_contribution_1 = require("@theia/navigator/lib/browser/navigator-contribution");
exports.WelcomePageCommand = {
    id: welcome_page_widget_1.WelComePageWidget.ID,
    label: welcome_page_widget_1.WelComePageWidget.LABEL
};
let WelcomePageContribution = class WelcomePageContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: welcome_page_widget_1.WelComePageWidget.ID,
            widgetName: welcome_page_widget_1.WelComePageWidget.LABEL,
            defaultWidgetOptions: {
                area: 'right',
                rank: 10000
            }
        });
    }
    async onStart(app) {
        this.stateService.reachedState('ready').then(a => this.openView({ reveal: true }));
    }
    initializeLayout(app) {
        this.fileNavigatorContribution.openView({ reveal: true });
    }
    registerCommands(registry) {
        registry.registerCommand(exports.WelcomePageCommand, {
            execute: () => this.openView({ reveal: true }),
        });
    }
    registerMenus(menus) {
        menus.registerMenuAction(browser_1.CommonMenus.HELP, {
            commandId: exports.WelcomePageCommand.id,
            label: exports.WelcomePageCommand.label,
            order: 'a10'
        });
    }
};
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], WelcomePageContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_2.WorkspaceService),
    __metadata("design:type", browser_2.WorkspaceService)
], WelcomePageContribution.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(navigator_contribution_1.FileNavigatorContribution),
    __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
], WelcomePageContribution.prototype, "fileNavigatorContribution", void 0);
WelcomePageContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], WelcomePageContribution);
exports.WelcomePageContribution = WelcomePageContribution;
//# sourceMappingURL=welcome-page-contribution.js.map