import { injectable, inject, postConstruct } from "inversify";
import { AbstractViewContribution, ApplicationShell, FrontendApplicationContribution, FrontendApplication } from '@theia/core/lib/browser';
import { UserInfoWidget } from './userinfo-widget';
import { UserInfoBackendService } from '../../../node/common/protocol';
import { frontendStorage } from '../../storage/infoStorage';

@injectable()
export class UserInfoContribution extends AbstractViewContribution<UserInfoWidget> implements FrontendApplicationContribution {

    @inject(ApplicationShell)
    protected readonly shell: ApplicationShell;

    constructor(
        @inject(UserInfoBackendService) private readonly userInfoBackendService: UserInfoBackendService
    ) {
        super({
            widgetId: UserInfoWidget.ID,
            widgetName: UserInfoWidget.LABEL,
             defaultWidgetOptions: { area: 'top' }
        });
    }

    @postConstruct()
    protected init(): void {
        this.userInfoBackendService.getUserInfo().then(r => {
            frontendStorage.setItem('userinfo', r);
            this.openView({activate: false})
        });
    }

    async onStart(app: FrontendApplication): Promise<void> {
        this.openView({activate: false});
    }

}