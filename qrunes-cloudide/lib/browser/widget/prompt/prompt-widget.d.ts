/**
 * Copyright (C) OriginQ 2021
 * This ts file provide prompt widget
 */
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import * as React from "react";
export declare class PromptWidget extends ReactWidget {
    static readonly ID = "keyBind:prompt";
    static readonly LABEL = "key bind prompt";
    protected init(): Promise<void>;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=prompt-widget.d.ts.map