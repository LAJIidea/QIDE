/**
 * Copyright (C) 2021 Origin Q
 * This ts file provide prompt contribution
 */
import { AbstractViewContribution } from "@theia/core/lib/browser";
import { PromptWidget } from "./prompt-widget";
import { Command, CommandRegistry } from "@theia/core/lib/common";
export declare const PromptCommand: Command;
export declare class PromptContribution extends AbstractViewContribution<PromptWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
}
//# sourceMappingURL=prompt-contribution.d.ts.map