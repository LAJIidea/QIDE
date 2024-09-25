"use strict";
/**
 * This file provide CloudIDE MessageDialog
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDialog = void 0;
const browser_1 = require("@theia/core/lib/browser");
const brand_1 = require("../../common/brand");
class MessageDialog extends browser_1.AbstractDialog {
    constructor(message, title = (0, brand_1.getProductName)(), acceptButtonText = 'OK') {
        super({
            title
        });
        this.contentNode.appendChild(this.createMessageNode(message));
        this.appendAcceptButton(acceptButtonText);
    }
    getPrimaryButton() {
        return this.acceptButton;
    }
    get value() {
        return;
    }
    createMessageNode(msg) {
        if (typeof msg === 'string') {
            const messageNode = document.createElement("div");
            messageNode.style.whiteSpace = "pre";
            messageNode.textContent = msg;
            return messageNode;
        }
        return msg;
    }
}
exports.MessageDialog = MessageDialog;
//# sourceMappingURL=message-dialog.js.map