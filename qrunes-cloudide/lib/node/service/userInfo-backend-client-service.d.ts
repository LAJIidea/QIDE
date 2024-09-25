import { UserInfoBackendWithClientService, BackendClient } from '../common/protocol';
export declare class UserInfoBackendWithClientServiceImpl implements UserInfoBackendWithClientService {
    private client?;
    greet(): Promise<string>;
    dispose(): void;
    setClient(client: BackendClient): void;
}
//# sourceMappingURL=userInfo-backend-client-service.d.ts.map