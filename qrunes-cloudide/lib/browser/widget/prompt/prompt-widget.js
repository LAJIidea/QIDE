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
var PromptWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptWidget = void 0;
/**
 * Copyright (C) OriginQ 2021
 * This ts file provide prompt widget
 */
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const inversify_1 = require("inversify");
const React = require("react");
let PromptWidget = PromptWidget_1 = class PromptWidget extends react_widget_1.ReactWidget {
    async init() {
        this.id = PromptWidget_1.ID;
        this.title.label = PromptWidget_1.LABEL;
        this.title.caption = PromptWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-bars';
        this.update();
    }
    render() {
        return React.createElement("div", { className: "prompt-mt" },
            React.createElement("table", null,
                React.createElement("caption", null, "\u5FEB\u6377\u952E\u7ED1\u5B9A"),
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u547D\u4EE4"),
                        React.createElement("td", null, "\u952E\u4F4D"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u67E5\u627E"),
                        React.createElement("td", null, "ctrlcmd + f")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u64A4\u9500"),
                        React.createElement("td", null, "ctrlcmd + z")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u590D\u5236"),
                        React.createElement("td", null, "ctrlcmd + c")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u590D\u5236\u8DEF\u5F84"),
                        React.createElement("td", null, "shift + alt +c")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u6062\u590D"),
                        React.createElement("td", null, "ctrlcmd + shift +z")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u526A\u5207"),
                        React.createElement("td", null, "ctrl + x")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5207\u6362\u5927\u7EB2\u89C6\u56FE"),
                        React.createElement("td", null, "ctrlcmd + shift +i")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5207\u6362\u8C03\u8BD5\u63A7\u5236\u53F0\u89C6\u56FE"),
                        React.createElement("td", null, "ctrlcmd + shift + y")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5207\u51FA\u8C03\u7528\u5C42\u7EA7\u89C6\u56FE"),
                        React.createElement("td", null, "ctrlcmd + shift + f1")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5207\u6362\u5386\u53F2\u89C6\u56FE"),
                        React.createElement("td", null, "alt + h")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5207\u6362\u8F93\u51FA\u89C6\u56FE"),
                        React.createElement("td", null, "ctrlcmd + shift + u")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5207\u6362\u4EE3\u7801\u7BA1\u7406\u89C6\u56FE"),
                        React.createElement("td", null, "ctrlcmd + shift +g")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5207\u6362\u8D44\u6E90\u7BA1\u7406\u5668\u89C6\u56FE"),
                        React.createElement("td", null, "ctrlcmd + shift + e")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5168\u9009"),
                        React.createElement("td", null, "ctrlcmd + a")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u66FF\u6362"),
                        React.createElement("td", null, "ctrlcmd + alt + f")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u8C03\u8BD5"),
                        React.createElement("td", null, "ctrlcmd + f5")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u8F6C\u5230\u5DE5\u4F5C\u533A\u4E2D\u7684\u7B26\u53F7"),
                        React.createElement("td", null, "ctrlcmd + o")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u5355\u6B65\u8FDB\u5165"),
                        React.createElement("td", null, "f11")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u5355\u6B65\u8DF3\u51FA"),
                        React.createElement("td", null, "shift + f11")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u5355\u6B65\u8DF3\u8FC7"),
                        React.createElement("td", null, "f10")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u7EE7\u7EED"),
                        React.createElement("td", null, "f5")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u542F\u52A8\u8C03\u8BD5"),
                        React.createElement("td", null, "f5")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u505C\u6B62\u8C03\u8BD5"),
                        React.createElement("td", null, "shift + f5")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u6682\u505C"),
                        React.createElement("td", null, "f6")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Debug:\u91CD\u542F\u8C03\u8BD5"),
                        React.createElement("td", null, "cltrcmd + shift + f5")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5220\u9664\u884C"),
                        React.createElement("td", null, "shift + ctrl + k")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Editor:\u540E\u9000"),
                        React.createElement("td", null, "alt + left")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Editor:\u524D\u8FDB"),
                        React.createElement("td", null, "alt + right")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u8F6C\u5230\u4E0A\u4E00\u6B21\u7F16\u8F91\u4F4D\u7F6E"),
                        React.createElement("td", null, "ctrl + alt + q")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u4FDD\u5B58"),
                        React.createElement("td", null, "ctrlcmd + s")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u6253\u5F00\u6587\u4EF6"),
                        React.createElement("td", null, "ctrlcmd + p")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5220\u9664"),
                        React.createElement("td", null, "del")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u65B0\u5EFA\u6587\u4EF6"),
                        React.createElement("td", null, "alt + n")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u91CD\u547D\u540D"),
                        React.createElement("td", null, "f2")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u6253\u5F00\u65B0\u7EC8\u7AEF"),
                        React.createElement("td", null, "ctrl + shift + `")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u6E05\u9664\u7EC8\u7AEF"),
                        React.createElement("td", null, "ctrlcmd + k")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u62C6\u5206\u7F16\u8F91\u5668"),
                        React.createElement("td", null, "ctrlcmd + \\")))));
    }
};
PromptWidget.ID = 'keyBind:prompt';
PromptWidget.LABEL = 'key bind prompt';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PromptWidget.prototype, "init", null);
PromptWidget = PromptWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], PromptWidget);
exports.PromptWidget = PromptWidget;
//# sourceMappingURL=prompt-widget.js.map