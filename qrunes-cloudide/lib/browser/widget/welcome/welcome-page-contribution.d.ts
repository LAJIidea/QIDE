import { WelComePageWidget } from './welcome-page-widget';
import { AbstractViewContribution, FrontendApplication, FrontendApplicationContribution } from '@theia/core/lib/browser';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { FileNavigatorContribution } from "@theia/navigator/lib/browser/navigator-contribution";
import { MaybePromise, MenuModelRegistry } from '@theia/core';
import { CommandRegistry } from '@theia/core/lib/common';
export declare const WelcomePageCommand: {
    id: string;
    label: string;
};
export declare class WelcomePageContribution extends AbstractViewContribution<WelComePageWidget> implements FrontendApplicationContribution {
    protected readonly stateService: FrontendApplicationStateService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly fileNavigatorContribution: FileNavigatorContribution;
    constructor();
    onStart(app: FrontendApplication): Promise<void>;
    initializeLayout(app: FrontendApplication): MaybePromise<void>;
    registerCommands(registry: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=welcome-page-contribution.d.ts.map