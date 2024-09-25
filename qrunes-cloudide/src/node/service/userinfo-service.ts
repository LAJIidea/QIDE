import { UserInfoBackendService } from '../common/protocol';
import { injectable } from 'inversify';
import { localStorage } from '../storage/storageInfo';


@injectable()
export class UserInfoBackendServiceImpl implements UserInfoBackendService {

    getUserInfo(): Promise<string> {
        let containerId = localStorage.getItem('containerId');
        let userName = localStorage.getItem('userName');
        let data = JSON.stringify({'userName': userName, 'instanceId': containerId})
        return new Promise<string>(resolve => resolve(data));
    }

}
