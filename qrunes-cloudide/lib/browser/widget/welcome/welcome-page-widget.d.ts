/**
 * This ts file provide welcome page widget
 */
import { CommandRegistry } from "@theia/core/lib/common";
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import { ApplicationInfo, ApplicationServer } from "@theia/core/lib/common/application-protocol";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { OpenerService, ApplicationShell } from '@theia/core/lib/browser';
import * as React from 'react';
export declare class WelComePageWidget extends ReactWidget {
    static readonly ID = "originq.getting.started.widget";
    static readonly LABEL = "Getting Started";
    protected applicationInfo: ApplicationInfo | undefined;
    protected readonly appServer: ApplicationServer;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly workspaceService: WorkspaceService;
    protected readonly openerService: OpenerService;
    protected readonly shell: ApplicationShell;
    protected init(): Promise<void>;
    protected render(): React.ReactNode;
    protected renderHeader(): React.ReactNode;
    protected renderFeatureSection(title: string, icon: string, description: JSX.Element, opener: () => void): React.ReactNode;
    protected renderVersion(): React.ReactNode;
    protected renderHelp(): React.ReactNode;
    protected openFileExplorer: () => Promise<import("@phosphor/widgets/lib/widget").Widget | undefined>;
    protected openCreateProject: () => Promise<unknown>;
    protected openFile: () => Promise<unknown>;
    protected openFolder: () => Promise<unknown>;
    protected openTheme: () => Promise<unknown>;
    protected openKeyBind: () => Promise<unknown>;
}
//# sourceMappingURL=welcome-page-widget.d.ts.map