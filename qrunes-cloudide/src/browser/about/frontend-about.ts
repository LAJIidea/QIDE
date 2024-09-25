import { WindowService } from "@theia/core/lib/browser/window/window-service";
import { injectable, inject, named, postConstruct } from "inversify";
import { aboutServiceSymbol, AboutService, aboutLoggerName, AboutInfo } from '../../common/about/about-service';
import { ApplicationServer, ApplicationInfo } from '@theia/core/lib/common/application-protocol';
import { ILogger } from "@theia/core";
import { getProductName } from "../../common/brand";
import { MessageDialog } from '../core/message-dialog';


export const about = Symbol("about");

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

@injectable()
export class FrotendAbout implements About {

    private applicationInfo: ApplicationInfo | undefined;

    protected reportIssueMessage: string = `Report an issue to help us improve ${getProductName()}.`

    constructor(
        @inject(aboutServiceSymbol) protected readonly aboutService: AboutService,
        @inject(WindowService) private readonly windowService: WindowService,
        @inject(ApplicationServer) protected readonly appServer: ApplicationServer,
        @inject(ILogger) @named(aboutLoggerName) protected readonly logger: ILogger
    ){}

    @postConstruct()
    protected async init(): Promise<void> {
        this.applicationInfo = await this.appServer.getApplicationInfo();
    }

    public async reportIssue(): Promise<void> {
        this.logger.info("Opening feedback dialog");

        const dialogContent = document.createElement("div");
        this.logPlatform()

        dialogContent.appendChild(this.createParagraph(this.reportIssueMessage));

        const openLogLink = await this.createOpenLogLink();
        dialogContent.appendChild(openLogLink);

        const dialog = new MessageDialog(dialogContent, "Report an issue or provide feedback", "Report Issue");
        const acceptButton = dialog.getPrimaryButton() as HTMLButtonElement;
        // todo 加上社区地址
        acceptButton.addEventListener("click", () => this.openLink(""), false);
        dialog.open();
    }

    public async openDocs(): Promise<void> {
        this.openLink("");
    }

    public openForum(): void {
        this.openLink("https://forum.originqc.com.cn/rostrum/index.html");
    }

    public about(): void {
        this.logger.info(`Displaying information about ${getProductName()} browser`);
        this.aboutService.getInfo().then((value) => {
            console.log(value.licensePath);
            this.showDialog(value);
        });
    }

    private showDialog(info: AboutInfo): void {
        const dialogContent = document.createElement("div");

        dialogContent.appendChild(this.createLogo());

        if (this.applicationInfo){
            dialogContent.appendChild(this.createParagraph(`${getProductName()}: ${this.applicationInfo?.version}`));
            console.log(this.applicationInfo.version);
        }

        if (info.additional) {
            dialogContent.appendChild(this.createParagraph(info.additional));
        }

        dialogContent.appendChild(this.createLink(`${getProductName()} Documention`, info.licensePath));
        const dialog = new MessageDialog(dialogContent);
        dialog.open();
    }

    private createLogo(): HTMLElement {
        const element = document.createElement("img");
        element.id = "originq-about-logo";
        return element;
    }

    private createLink(text: string, href: string): HTMLElement {
        const element = document.createElement("p");
        const anchor = document.createElement("a");
        anchor.innerText = text;
        anchor.href = href;
        anchor.target = "_blank";
        element.appendChild(anchor);

        anchor.addEventListener("click", event => {
            event.preventDefault();
            this.openLink(href);
        });

        return element;
    }

    private createParagraph(text: string): HTMLElement {
        const element = document.createElement("p");
        element.innerText = text;
        return element;
    }

    protected openLink(href: string): void {
        this.windowService.openNewWindow(href, { external: true });
    }

    protected async createOpenLogLink(): Promise<HTMLParagraphElement> {
        return document.createElement("div");
    }

    protected logPlatform(): void {
        if(this.applicationInfo) {
            this.logger.info(`${getProductName()} version: ${this.applicationInfo.version}`);
        }
    }

}
