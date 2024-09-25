import { CommandRegistry } from '@theia/core/lib/common';
import { CommandContribution, MenuContribution, MenuModelRegistry } from '@theia/core';
import { About } from './frontend-about';
export declare const HELP_INFO: string[];
/**
 * Class to contain the command and menu contribution
 */
export declare class AboutContribution implements CommandContribution, MenuContribution {
    private readonly aboutCloudide;
    constructor(aboutCloudide: About);
    /**
     * Register our commands
     * @param registry registry contribution
     */
    registerCommands(registry: CommandRegistry): void;
    /**
     * Register our menu items
     * @param menus menuRegistry contribution
     */
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=about-contribution.d.ts.map