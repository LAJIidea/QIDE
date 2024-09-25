/**
 * This ts file provide about info backend service
 */
import { injectable } from "inversify";
import { AboutInfo, AboutService, PodInfo } from '../../common/about/about-service';
import { localStorage } from "../storage/storageInfo";
import { get } from "../utils/requestServer";

const TPIP_PATH = "https://www.xxxx.com";
const RELEASE_NOTES = "RELEASE_NOTES.md";

@injectable()
export class BackendAboutService implements AboutService {

    public getInfo(): Promise<AboutInfo> {
        let documentUrl = localStorage.getItem('documentUrl');
        return Promise.resolve({
            licensePath: documentUrl,
            tpipPath: TPIP_PATH,
            releaseNotes: RELEASE_NOTES
        })
    }

    public getPodInfo(): Promise<PodInfo> {
        let instanceId = localStorage.getItem('instanceId');
        let userId = localStorage.getItem('userId');
        let apiKey = localStorage.getItem('apiKey');
        let imageApi = localStorage.getItem('imageApi');
        console.log("=========imageApi========" + imageApi);
        console.log("=========instanceId========" + instanceId);
        console.log("=========userId========" + userId);
        console.log("=========apiKey========" + apiKey);

        return Promise.resolve({
            instanceId: instanceId,
            apiKey: apiKey,
            userId: userId,
            imageApi: imageApi
        })

    }

    public getInstanceId(): Promise<string> {
        // let instanceId = localStorage.getItem('instanceId');

        return Promise.resolve("123456")

    }

    public buildAPI(instanceId: string, imageName: string): Promise<any> {
        console.log("buildAPI: " + instanceId + "imageName：" + imageName)
        return new Promise<any>((resolve, reject) => {
            //const centerAPI = localStorage.getItem("centerApi")
            let url = "http://localhost:8086/" + "/sys/build?instanceId=" + instanceId + "&imageName=" + imageName;
            get(url).then(data => {
                console.log("======data=======", data.data.obj)
                resolve(data.data.obj);
            }).catch(e => {
                reject(e);
            })
        })
    }
}

