import { JsonRpcServer } from "@theia/core/lib/common/messaging";
export declare const UserInfoBackendService: unique symbol;
export declare const USER_INFO_BACKEND_PATH = "/services/userinfo";
export interface UserInfoBackendService {
    getUserInfo(): Promise<string>;
}
export declare const UserInfoBackendWithClientService: unique symbol;
export declare const USER_INFO_BACKEND_WITH_CLIENT_PATH = "/services/withClient";
export interface UserInfoBackendWithClientService extends JsonRpcServer<BackendClient> {
    greet(): Promise<string>;
}
export declare const BackendClient: unique symbol;
export interface BackendClient {
    getName(): Promise<string>;
}
//# sourceMappingURL=protocol.d.ts.map