"use strict";
/**
 * This ts file provide welcome page widget
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WelComePageWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelComePageWidget = void 0;
const common_1 = require("@theia/core/lib/common");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const application_protocol_1 = require("@theia/core/lib/common/application-protocol");
const inversify_1 = require("inversify");
const browser_1 = require("@theia/workspace/lib/browser");
const browser_2 = require("@theia/core/lib/browser");
const browser_3 = require("@theia/navigator/lib/browser");
const inversify_2 = require("@theia/core/shared/inversify");
const React = require("react");
// import URI from "@theia/core/lib/common/uri";
let WelComePageWidget = WelComePageWidget_1 = class WelComePageWidget extends react_widget_1.ReactWidget {
    constructor() {
        super(...arguments);
        this.openFileExplorer = () => this.shell.revealWidget(browser_3.EXPLORER_VIEW_CONTAINER_ID);
        // protected openQRunesFile = () => open(this.openerService, new URI(`${this.workspaceService.workspace?.uri}/demo.qrunes`))
        // protected openPythonFile = () => open(this.openerService, new URI(`${this.workspaceService.workspace?.uri}/demo.py`))
        // protected openCppFile = () => open(this.openerService, new URI(`${this.workspaceService.workspace?.uri}/demo.cpp`))
        this.openCreateProject = () => this.commandRegistry.executeCommand("cloudide.createProject");
        this.openFile = () => this.commandRegistry.executeCommand("file.newFile");
        this.openFolder = () => this.commandRegistry.executeCommand("file.newFolder");
        this.openTheme = () => this.commandRegistry.executeCommand("workbench.action.selectTheme");
        this.openKeyBind = () => this.commandRegistry.executeCommand("open.prompt");
    }
    async init() {
        this.id = WelComePageWidget_1.ID;
        this.title.label = WelComePageWidget_1.LABEL;
        this.title.caption = WelComePageWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-info';
        this.applicationInfo = await this.appServer.getApplicationInfo();
        this.update();
    }
    render() {
        return React.createElement("div", { className: 'gs-container' },
            this.renderHeader(),
            React.createElement("hr", { className: 'gs-hr' }),
            React.createElement("div", { className: "flex-grid" },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('启动', 'fa fa-play', (React.createElement("p", null,
                    React.createElement("a", { style: { color: "#007ACC" }, onClick: this.openFile }, "\u65B0\u5EFA\u6587\u4EF6"),
                    React.createElement("br", null),
                    React.createElement("a", { style: { color: "#007ACC" }, onClick: this.openFolder }, "\u65B0\u5EFA\u6587\u4EF6\u5939"))), this.openCreateProject))),
            React.createElement("div", { className: "flex-grid" },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('自定义', 'fa fa-opera', (React.createElement("p", null,
                    React.createElement("a", { style: { color: "#007ACC" }, onClick: this.openTheme, id: "bold-p" }, "\u989C\u8272\u4E3B\u9898"),
                    React.createElement("br", null),
                    "\u4F7F\u7F16\u8F91\u5668\u548C\u4EE3\u7801\u5448\u73B0\u4F60\u559C\u6B22\u7684\u5916\u89C2")), this.openCreateProject))),
            React.createElement("div", { className: "flex-grid" },
                React.createElement("div", { className: "col" }, this.renderFeatureSection('学习', 'fa fa-graduation-cap', (React.createElement("div", null,
                    React.createElement("p", { id: "bold-p" }, "\u67E5\u627E\u548C\u8FD0\u884C\u547D"),
                    React.createElement("p", null, "\u4F7F\u7528\u547D\u4EE4\u9762\u677F\u5FEB\u901F\u8BBF\u95EE\u548C\u641C\u7D22\u547D\u4EE4(Ctrl+Shift+p)"),
                    React.createElement("p", null,
                        React.createElement("a", { style: { color: "#007ACC" }, onClick: this.openKeyBind }, "\u70B9\u51FB\u67E5\u770B\u5FEB\u6377\u952E\u8BE6\u60C5")))), this.openCreateProject))),
            React.createElement("div", { className: "flex-grid" },
                React.createElement("div", { className: "col" }, this.renderFeatureSection('QRunes Editor', 'fa fa-quor', (React.createElement("p", null,
                    "OriginQ IDE\u5141\u8BB8\u60A8\u7F16\u8F91\u548C\u8FD0\u884CQRunes\u6587\u4EF6\u3002OriginQ IDE\u5BF9QRunes\u8BED\u8A00\u6709\u5F88\u597D\u7684\u652F\u6301\uFF0C\u4F8B\u5982\u8FD0\u884C\u65F6\u53EF\u89C6\u5316\u754C\u9762\u3001\u4EE3\u7801\u63D0\u793A\u3001 \u9519\u8BEF\u68C0\u67E5\u7B49\u3002\u53CC\u51FB\u6587\u4EF6\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u7684\u6587\u4EF6\"demo.qrunes\"\u4F53\u9A8CQRunes\u7F16\u8F91\u5668\u3002\u8BE6\u7EC6\u7684QRunes\u6559\u7A0B",
                    React.createElement("a", { style: { color: "#007ACC" }, href: "https://qrunes-tutorial.readthedocs.io/en/latest/index.html", target: '_blank' }, "\u70B9\u51FB\u8FD9\u91CC"))), this.openCreateProject))),
            React.createElement("div", { className: "flex-grid" },
                React.createElement("div", { className: "col" }, this.renderFeatureSection('PyQPanda Editor', 'fa fa-pinterest-p', (React.createElement("p", null,
                    "OriginQ IDE\u5141\u8BB8\u60A8\u4F7F\u7528PyQPanda(Python\u8BED\u8A00\u91CF\u5B50\u7F16\u7A0B\u6846\u67B6)\u3002\u501F\u52A9OriginQ IDE\u53EF\u4EE5\u5B8C\u7F8E\u5B9E\u73B0PyQPanda\u6240\u6709\u529F\u80FD\u3002\u53CC\u51FB\u6587\u4EF6\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u7684\u6587\u4EF6\"demo.py\"\u4F53\u9A8CPyQPanda\u7F16\u8F91\u5668\u3002 \u8BE6\u7EC6\u7684PyQPanda\u6559\u7A0B",
                    React.createElement("a", { style: { color: "#007ACC" }, href: "https://pyqpanda-toturial.readthedocs.io/zh/latest/index.html", target: '_blank' }, "\u70B9\u51FB\u8FD9\u91CC"))), this.openCreateProject))),
            React.createElement("div", { className: "flex-grid" },
                React.createElement("div", { className: "col" }, this.renderFeatureSection('QPanda Editor', '', (React.createElement("p", null,
                    "\u6839\u636E\u96C6\u6210\u7684C++\u73AF\u5883\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5730\u5728OriginQ IDE\u4E2D\u5BF9QPanda\u8FDB\u884C\u91CF\u5B50\u7F16\u7A0B\u5B9E\u9A8C\uFF0C\u5E76\u4E14\u4F7F\u7528\u5F3A\u5927\u7684\u8C03\u8BD5\u529F\u80FD\u6765\u8C03\u8BD5\u4EE3\u7801\u3002\u53CC\u51FB\u6587\u4EF6\u6D4F\u89C8\u5668\u4E2D\u7684\u6587\u4EF6\"demo.cpp\" \u6765\u4F53\u9A8CQPanda\u7F16\u8F91\u5668\uFF01 \u8BE6\u7EC6\u7684QPanda\u6559\u7A0B",
                    React.createElement("a", { style: { color: "#007ACC" }, href: "https://qpanda-tutorial.readthedocs.io/zh/latest/", target: '_blank' }, "\u70B9\u51FB\u8FD9\u91CC"))), this.openCreateProject))));
    }
    renderHeader() {
        return React.createElement("div", { className: 'gs-header' },
            React.createElement("h1", null,
                "OriginQ IDE ",
                React.createElement("span", { className: 'gs-sub-header' }, "Getting Started")),
            React.createElement("p", null, "OriginQ IDE\u662F\u4E00\u4E2A\u57FA\u4E8Eweb\u7684\u5F00\u53D1\u5DE5\u5177, \u4E13\u95E8\u7528\u4E8E\u91CF\u5B50\u8BA1\u7B97\u7F16\u7A0B\u3002\u8BF7\u53C2\u9605\u4E0B\u9762\u7684\u90E8\u5206, \u4EE5\u4E86\u89E3\u66F4\u591A\u66F4\u591A\u53EF\u7528\u529F\u80FD"));
    }
    renderFeatureSection(title, icon, description, opener) {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("a", { href: '#', onClick: opener },
                React.createElement("h3", { className: 'gs-section-header' },
                    React.createElement("i", { className: icon }),
                    title,
                    React.createElement("span", { style: { marginLeft: '5px' } },
                        React.createElement("i", { className: 'fas fa-external-link-alt' })))),
            description,
            React.createElement("div", { className: 'gs-action-container' }));
    }
    renderVersion() {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("p", { className: 'gs-sub-header gs-version' })));
    }
    renderHelp() {
        return React.createElement("div", { className: 'gs-setion' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-question-circle' }),
                "Help and more information"),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: "", target: '_blank' }, "Ask a question")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: "", target: '_blank' }, "Report an issue")),
            React.createElement("div", { className: "gs-action-container" },
                React.createElement("a", { href: "", target: "_blank" }, "Github project with cide and more info")),
            React.createElement("div", { className: "gs-action-container" },
                React.createElement("a", { href: "", target: "_blank" }, "Customize your own quantum IDE")));
    }
};
WelComePageWidget.ID = 'originq.getting.started.widget';
WelComePageWidget.LABEL = 'Getting Started';
__decorate([
    (0, inversify_1.inject)(application_protocol_1.ApplicationServer),
    __metadata("design:type", Object)
], WelComePageWidget.prototype, "appServer", void 0);
__decorate([
    (0, inversify_1.inject)(common_1.CommandRegistry),
    __metadata("design:type", common_1.CommandRegistry)
], WelComePageWidget.prototype, "commandRegistry", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.WorkspaceService),
    __metadata("design:type", browser_1.WorkspaceService)
], WelComePageWidget.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_2.OpenerService),
    __metadata("design:type", Object)
], WelComePageWidget.prototype, "openerService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_2.ApplicationShell),
    __metadata("design:type", browser_2.ApplicationShell)
], WelComePageWidget.prototype, "shell", void 0);
__decorate([
    (0, inversify_2.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WelComePageWidget.prototype, "init", null);
WelComePageWidget = WelComePageWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], WelComePageWidget);
exports.WelComePageWidget = WelComePageWidget;
//# sourceMappingURL=welcome-page-widget.js.map