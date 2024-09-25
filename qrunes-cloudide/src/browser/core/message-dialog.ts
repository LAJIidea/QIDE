/**
 * This file provide CloudIDE MessageDialog
 */

import { AbstractDialog } from "@theia/core/lib/browser";
import { getProductName } from '../../common/brand';


export class MessageDialog extends AbstractDialog<void> {

    constructor(message: string | Node, title: string = getProductName(), acceptButtonText: string = 'OK') {
        super({
            title
        });

        this.contentNode.appendChild(this.createMessageNode(message));
        this.appendAcceptButton(acceptButtonText);
    }

    public getPrimaryButton(): HTMLButtonElement | undefined {
        return this.acceptButton;
    }

    get value(): void {
        return;
    }

    protected createMessageNode(msg: string | Node): Node {
        if (typeof msg === 'string') {
            const messageNode = document.createElement("div");
            messageNode.style.whiteSpace = "pre";
            messageNode.textContent = msg;
            return messageNode;
        }

        return msg;
    }

}