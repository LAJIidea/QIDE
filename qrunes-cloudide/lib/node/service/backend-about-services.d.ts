import { AboutInfo, AboutService, PodInfo } from '../../common/about/about-service';
export declare class BackendAboutService implements AboutService {
    getInfo(): Promise<AboutInfo>;
    getPodInfo(): Promise<PodInfo>;
    getInstanceId(): Promise<string>;
    buildAPI(instanceId: string, imageName: string): Promise<any>;
}
//# sourceMappingURL=backend-about-services.d.ts.map