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
exports.AboutContribution = exports.HELP_INFO = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("inversify");
const brand_1 = require("../../common/brand");
const frontend_about_1 = require("./frontend-about");
exports.HELP_INFO = [...browser_1.CommonMenus.HELP, '1_info'];
const aboutCommand = {
    id: "originq:about",
    label: `About ${(0, brand_1.getProductName)()}`
};
// const reportCommand: Command = {
//     id: "originq.cloudide.report",
//     label: "Report an Issue"
// };
//
// const docsCommand: Command = {
//     id: "originq.cloudide.docs",
//     label: "Documentation"
// };
/**
 * Class to contain the command and menu contribution
 */
let AboutContribution = class AboutContribution {
    constructor(aboutCloudide) {
        this.aboutCloudide = aboutCloudide;
    }
    /**
     * Register our commands
     * @param registry registry contribution
     */
    registerCommands(registry) {
        registry.registerCommand(aboutCommand, {
            execute: () => this.aboutCloudide.about()
        });
        // delete contribution did not need
        registry.unregisterCommand({ id: 'workspace:open' });
        registry.unregisterCommand({ id: 'workspace:openWorkspace' });
        registry.unregisterCommand({ id: 'workspace:openRecent' });
        registry.unregisterCommand({ id: 'getting.started.widget' });
        registry.unregisterCommand({ id: 'core.about' });
        registry.unregisterCommand({ id: 'workspace:close' });
        registry.unregisterCommand({ id: 'workspace:addFolder' });
        registry.unregisterCommand({ id: 'workspace:openConfigFile' });
    }
    /**
     * Register our menu items
     * @param menus menuRegistry contribution
     */
    registerMenus(menus) {
        // menus.registerMenuAction(HELP_INFO, {
        //     commandId: aboutCommand.id,
        //     label: aboutCommand.label,
        //     order: 'A0'
        // });
    }
};
AboutContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(frontend_about_1.about)),
    __metadata("design:paramtypes", [Object])
], AboutContribution);
exports.AboutContribution = AboutContribution;
//# sourceMappingURL=about-contribution.js.map