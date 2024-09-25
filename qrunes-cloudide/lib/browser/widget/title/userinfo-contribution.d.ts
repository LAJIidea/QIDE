import { AbstractViewContribution, ApplicationShell, FrontendApplicationContribution, FrontendApplication } from '@theia/core/lib/browser';
import { UserInfoWidget } from './userinfo-widget';
import { UserInfoBackendService } from '../../../node/common/protocol';
export declare class UserInfoContribution extends AbstractViewContribution<UserInfoWidget> implements FrontendApplicationContribution {
    private readonly userInfoBackendService;
    protected readonly shell: ApplicationShell;
    constructor(userInfoBackendService: UserInfoBackendService);
    protected init(): void;
    onStart(app: FrontendApplication): Promise<void>;
}
//# sourceMappingURL=userinfo-contribution.d.ts.map