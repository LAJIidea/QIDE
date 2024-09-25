import { injectable, postConstruct } from "inversify";
import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { frontendStorage } from '../../storage/infoStorage';


@injectable()
export class UserInfoWidget extends ReactWidget {

    static readonly ID = 'userinfo:widget';
    static readonly LABEL = 'User Info';

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = UserInfoWidget.ID;
        this.title.caption = UserInfoWidget.LABEL;
        this.title.closable = false;
        this.title.iconClass = 'fa fa-windown-maxmize';
        this.update();
    }

    protected render(): React.ReactNode {
        let userInfo = JSON.parse(frontendStorage.getItem('userinfo'));
        console.log("用户信息为" + userInfo);
        return <div id="widgetBox">
            <span id="widgetBoxImg" onClick={this.QsvgClick}></span>
            <div id="widgetBoxContent">
                <div>{userInfo.userName}</div>
            </div>
        </div>
    }

    protected QsvgClick = () => {
        let Qbox = document.getElementById('widgetBoxContent');
        if (Qbox) {
            if (Qbox.style.display == 'none' || !Qbox.style.display) {
                Qbox.style.display = 'flex'
            } else {
                Qbox.style.display = 'none'
            }
        }
    }

}
