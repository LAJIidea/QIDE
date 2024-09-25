import { WindowService } from "@theia/core/lib/browser/window/window-service";
import { AboutService } from '../../common/about/about-service';
import { ApplicationServer } from '@theia/core/lib/common/application-protocol';
import { ILogger } from "@theia/core";
export declare const about: unique symbol;
export interface About {
    /**
     * Provide information about Mbed Studio, such as, Version numbers and licenses.
     */
    about(): void;
    /**
     * Open the default mail client to send issue reports.
     */
    reportIssue(): void;
    /**
     * Navigate to docs.
     */
    openDocs(): void;
    /**
     * Navigate to the forum
     */
    openForum(): void;
}
export declare class FrotendAbout implements About {
    protected readonly aboutService: AboutService;
    private readonly windowService;
    protected readonly appServer: ApplicationServer;
    protected readonly logger: ILogger;
    private applicationInfo;
    protected reportIssueMessage: string;
    constructor(aboutService: AboutService, windowService: WindowService, appServer: ApplicationServer, logger: ILogger);
    protected init(): Promise<void>;
    reportIssue(): Promise<void>;
    openDocs(): Promise<void>;
    openForum(): void;
    about(): void;
    private showDialog;
    private createLogo;
    private createLink;
    private createParagraph;
    protected openLink(href: string): void;
    protected createOpenLogLink(): Promise<HTMLParagraphElement>;
    protected logPlatform(): void;
}
//# sourceMappingURL=frontend-about.d.ts.map