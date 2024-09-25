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
var UserInfoWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoWidget = void 0;
const inversify_1 = require("inversify");
const React = require("react");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const infoStorage_1 = require("../../storage/infoStorage");
let UserInfoWidget = UserInfoWidget_1 = class UserInfoWidget extends react_widget_1.ReactWidget {
    constructor() {
        super(...arguments);
        this.QsvgClick = () => {
            let Qbox = document.getElementById('widgetBoxContent');
            if (Qbox) {
                if (Qbox.style.display == 'none' || !Qbox.style.display) {
                    Qbox.style.display = 'flex';
                }
                else {
                    Qbox.style.display = 'none';
                }
            }
        };
    }
    async init() {
        this.id = UserInfoWidget_1.ID;
        this.title.caption = UserInfoWidget_1.LABEL;
        this.title.closable = false;
        this.title.iconClass = 'fa fa-windown-maxmize';
        this.update();
    }
    render() {
        let userInfo = JSON.parse(infoStorage_1.frontendStorage.getItem('userinfo'));
        console.log("用户信息为" + userInfo);
        return React.createElement("div", { id: "widgetBox" },
            React.createElement("span", { id: "widgetBoxImg", onClick: this.QsvgClick }),
            React.createElement("div", { id: "widgetBoxContent" },
                React.createElement("div", null, userInfo.userName)));
    }
};
UserInfoWidget.ID = 'userinfo:widget';
UserInfoWidget.LABEL = 'User Info';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserInfoWidget.prototype, "init", null);
UserInfoWidget = UserInfoWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], UserInfoWidget);
exports.UserInfoWidget = UserInfoWidget;
//# sourceMappingURL=userinfo-widget.js.map