import { WelComePageWidget } from './welcome-page-widget';
import { AbstractViewContribution, CommonMenus, FrontendApplication, FrontendApplicationContribution } from '@theia/core/lib/browser';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { inject, injectable } from 'inversify';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { FileNavigatorContribution } from "@theia/navigator/lib/browser/navigator-contribution";
import { MaybePromise, MenuModelRegistry } from '@theia/core';
import { CommandRegistry } from '@theia/core/lib/common';



export const WelcomePageCommand = {
    id: WelComePageWidget.ID,
    label: WelComePageWidget.LABEL
};

@injectable()
export class WelcomePageContribution extends AbstractViewContribution<WelComePageWidget> implements FrontendApplicationContribution {

    @inject(FrontendApplicationStateService)
    protected readonly stateService: FrontendApplicationStateService;

    @inject(WorkspaceService)
    protected readonly workspaceService: WorkspaceService;

    @inject(FileNavigatorContribution)
    protected readonly fileNavigatorContribution: FileNavigatorContribution;

    constructor() {
        super({
            widgetId: WelComePageWidget.ID,
            widgetName: WelComePageWidget.LABEL,
            defaultWidgetOptions: {
                area: 'right',
                rank: 10000
            }
        })
    }

    async onStart(app: FrontendApplication): Promise<void> {
        this.stateService.reachedState('ready').then(
            a => this.openView({ reveal: true })
        )
    }

    initializeLayout(app: FrontendApplication): MaybePromise<void> {
        this.fileNavigatorContribution.openView({ reveal: true });
    }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(WelcomePageCommand, {
            execute: () => this.openView({ reveal: true }),
        });
    }

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: WelcomePageCommand.id,
            label: WelcomePageCommand.label,
            order: 'a10'
        });
    }

}
