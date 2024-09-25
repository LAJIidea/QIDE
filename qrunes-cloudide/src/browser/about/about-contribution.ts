import { Command, CommandRegistry } from '@theia/core/lib/common';
import { CommonMenus } from "@theia/core/lib/browser";
import { inject , injectable} from "inversify";
import { getProductName } from "../../common/brand";
import { CommandContribution, MenuContribution, MenuModelRegistry } from '@theia/core';
import { about, About } from './frontend-about';


export const HELP_INFO = [...CommonMenus.HELP, '1_info'];

const aboutCommand: Command = {
    id: "originq:about",
    label: `About ${getProductName()}`
};

// const reportCommand: Command = {
//     id: "originq.cloudide.report",
//     label: "Report an Issue"
// };
//
// const docsCommand: Command = {
//     id: "originq.cloudide.docs",
//     label: "Documentation"
// };


/**
 * Class to contain the command and menu contribution
 */
@injectable()
export class AboutContribution implements CommandContribution, MenuContribution {

    constructor(@inject(about) private readonly aboutCloudide: About) {

    }

    /**
     * Register our commands
     * @param registry registry contribution
     */
    public registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(aboutCommand, {
            execute: () => this.aboutCloudide.about()
        });

        // delete contribution did not need
        registry.unregisterCommand({id: 'workspace:open'});
        registry.unregisterCommand({id: 'workspace:openWorkspace'});
        registry.unregisterCommand({id: 'workspace:openRecent'});
        registry.unregisterCommand({id: 'getting.started.widget'});
        registry.unregisterCommand({id: 'core.about'});
        registry.unregisterCommand({id: 'workspace:close'});
        registry.unregisterCommand({id: 'workspace:addFolder'});
        registry.unregisterCommand({id: 'workspace:openConfigFile'});

    }

    /**
     * Register our menu items
     * @param menus menuRegistry contribution
     */
    public registerMenus(menus: MenuModelRegistry): void {
        // menus.registerMenuAction(HELP_INFO, {
        //     commandId: aboutCommand.id,
        //     label: aboutCommand.label,
        //     order: 'A0'
        // });
    }

}
