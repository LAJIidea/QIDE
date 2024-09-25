/**
 * This file provide CloudIDE MessageDialog
 */
import { AbstractDialog } from "@theia/core/lib/browser";
export declare class MessageDialog extends AbstractDialog<void> {
    constructor(message: string | Node, title?: string, acceptButtonText?: string);
    getPrimaryButton(): HTMLButtonElement | undefined;
    get value(): void;
    protected createMessageNode(msg: string | Node): Node;
}
//# sourceMappingURL=message-dialog.d.ts.map