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
exports.PromptContribution = exports.PromptCommand = void 0;
/**
 * Copyright (C) 2021 Origin Q
 * This ts file provide prompt contribution
 */
const browser_1 = require("@theia/core/lib/browser");
const prompt_widget_1 = require("./prompt-widget");
const inversify_1 = require("inversify");
exports.PromptCommand = { id: 'open.prompt' };
let PromptContribution = class PromptContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: prompt_widget_1.PromptWidget.ID,
            widgetName: prompt_widget_1.PromptWidget.LABEL,
            defaultWidgetOptions: { area: "main" }
        });
    }
    registerCommands(commands) {
        commands.registerCommand(exports.PromptCommand, {
            execute: () => super.openView({ activate: false, reveal: true })
        });
    }
};
PromptContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], PromptContribution);
exports.PromptContribution = PromptContribution;
//# sourceMappingURL=prompt-contribution.js.map