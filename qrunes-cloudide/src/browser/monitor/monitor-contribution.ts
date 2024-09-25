import { Command, CommandRegistry } from "@theia/core/lib/common";
import { CommandContribution } from "@theia/core";
import { injectable } from 'inversify'
import {postConstruct} from "@theia/core/shared/inversify";

const monitorCommand: Command = {
    id: "originq:monitor",
    label: 'monitor activity'
}

@injectable()
export class MonitorContribution implements CommandContribution {

    @postConstruct()
    public init() {

    }

    public registerCommands(commands: CommandRegistry) {
        commands.registerCommand(monitorCommand, {
            execute: () => {
                window.addEventListener("mousemove", this.activity, false);
            }
        })
    }

    public activity(): void {

    }

}
