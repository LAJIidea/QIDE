import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
export declare class UserInfoWidget extends ReactWidget {
    static readonly ID = "userinfo:widget";
    static readonly LABEL = "User Info";
    protected init(): Promise<void>;
    protected render(): React.ReactNode;
    protected QsvgClick: () => void;
}
//# sourceMappingURL=userinfo-widget.d.ts.map