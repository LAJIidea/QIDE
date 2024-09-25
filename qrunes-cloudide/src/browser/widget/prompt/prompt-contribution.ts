/**
 * Copyright (C) 2021 Origin Q
 * This ts file provide prompt contribution
 */
import {AbstractViewContribution} from "@theia/core/lib/browser";
import {PromptWidget} from "./prompt-widget";
import { injectable } from "inversify";
import {Command, CommandRegistry} from "@theia/core/lib/common";

export const PromptCommand: Command = { id: 'open.prompt' }

@injectable()
export class PromptContribution extends AbstractViewContribution<PromptWidget> {

    constructor() {
        super({
            widgetId: PromptWidget.ID,
            widgetName: PromptWidget.LABEL,
            defaultWidgetOptions: { area: "main" }
        });
    }

    public registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(PromptCommand, {
            execute: () => super.openView({activate: false, reveal: true})
        })
    }
}
