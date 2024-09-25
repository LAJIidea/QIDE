import { JsonRpcServer } from "@theia/core/lib/common/messaging";


export const UserInfoBackendService = Symbol('UserInfoBackendService');
export const USER_INFO_BACKEND_PATH = '/services/userinfo';
export interface UserInfoBackendService {
    getUserInfo(): Promise<string>
}

export const UserInfoBackendWithClientService = Symbol('BackendWithClient');
export const USER_INFO_BACKEND_WITH_CLIENT_PATH = '/services/withClient';

export interface UserInfoBackendWithClientService extends JsonRpcServer<BackendClient> {
    greet(): Promise<string>
}

export const BackendClient = Symbol('BackendClient');
export interface BackendClient {
    getName(): Promise<string>;
}