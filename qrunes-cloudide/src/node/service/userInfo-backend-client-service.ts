import { UserInfoBackendWithClientService, BackendClient } from '../common/protocol';
import { injectable } from 'inversify';

@injectable()
export class UserInfoBackendWithClientServiceImpl implements UserInfoBackendWithClientService {

    private client?: BackendClient;

    greet(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.client ? this.client.getName().then(greet => resolve('Hello' + greet))
                : reject('No client')
        });
    }

    dispose(): void {
        // do nothing
    }

    setClient(client: BackendClient): void {
        this.client = client;
    }

}