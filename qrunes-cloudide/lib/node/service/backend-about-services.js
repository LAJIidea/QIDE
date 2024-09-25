"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendAboutService = void 0;
/**
 * This ts file provide about info backend service
 */
const inversify_1 = require("inversify");
const storageInfo_1 = require("../storage/storageInfo");
const requestServer_1 = require("../utils/requestServer");
const TPIP_PATH = "https://www.xxxx.com";
const RELEASE_NOTES = "RELEASE_NOTES.md";
let BackendAboutService = class BackendAboutService {
    getInfo() {
        let documentUrl = storageInfo_1.localStorage.getItem('documentUrl');
        return Promise.resolve({
            licensePath: documentUrl,
            tpipPath: TPIP_PATH,
            releaseNotes: RELEASE_NOTES
        });
    }
    getPodInfo() {
        let instanceId = storageInfo_1.localStorage.getItem('instanceId');
        let userId = storageInfo_1.localStorage.getItem('userId');
        let apiKey = storageInfo_1.localStorage.getItem('apiKey');
        let imageApi = storageInfo_1.localStorage.getItem('imageApi');
        console.log("=========imageApi========" + imageApi);
        console.log("=========instanceId========" + instanceId);
        console.log("=========userId========" + userId);
        console.log("=========apiKey========" + apiKey);
        return Promise.resolve({
            instanceId: instanceId,
            apiKey: apiKey,
            userId: userId,
            imageApi: imageApi
        });
    }
    getInstanceId() {
        // let instanceId = localStorage.getItem('instanceId');
        return Promise.resolve("123456");
    }
    buildAPI(instanceId, imageName) {
        console.log("buildAPI: " + instanceId + "imageName：" + imageName);
        return new Promise((resolve, reject) => {
            //const centerAPI = localStorage.getItem("centerApi")
            let url = "http://localhost:8086/" + "/sys/build?instanceId=" + instanceId + "&imageName=" + imageName;
            (0, requestServer_1.get)(url).then(data => {
                console.log("======data=======", data.data.obj);
                resolve(data.data.obj);
            }).catch(e => {
                reject(e);
            });
        });
    }
};
BackendAboutService = __decorate([
    (0, inversify_1.injectable)()
], BackendAboutService);
exports.BackendAboutService = BackendAboutService;
//# sourceMappingURL=backend-about-services.js.map