"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@theia/core");
const inversify_1 = require("inversify");
const protocol_1 = require("./common/protocol");
const userinfo_service_1 = require("./service/userinfo-service");
const userInfo_backend_client_service_1 = require("./service/userInfo-backend-client-service");
const node_1 = require("@theia/core/lib/node");
const cloudide_backend_contribution_1 = require("./api/cloudide-backend-contribution");
const about_service_1 = require("../common/about/about-service");
const backend_about_services_1 = require("./service/backend-about-services");
exports.default = new inversify_1.ContainerModule(bind => {
    bind(protocol_1.UserInfoBackendService).to(userinfo_service_1.UserInfoBackendServiceImpl).inSingletonScope();
    bind(core_1.ConnectionHandler).toDynamicValue(ctx => new core_1.JsonRpcConnectionHandler(protocol_1.USER_INFO_BACKEND_PATH, () => {
        return ctx.container.get(protocol_1.UserInfoBackendService);
    })).inSingletonScope();
    bind(protocol_1.UserInfoBackendWithClientService).to(userInfo_backend_client_service_1.UserInfoBackendWithClientServiceImpl).inSingletonScope();
    bind(core_1.ConnectionHandler).toDynamicValue(ctx => new core_1.JsonRpcConnectionHandler(protocol_1.USER_INFO_BACKEND_WITH_CLIENT_PATH, client => {
        const server = ctx.container.get(protocol_1.UserInfoBackendWithClientService);
        server.setClient(client);
        client.onDidCloseConnection(() => server.dispose());
        return server;
    })).inSingletonScope();
    // bind about backend service
    bind(about_service_1.aboutServiceSymbol).to(backend_about_services_1.BackendAboutService).inSingletonScope();
    bind(core_1.ConnectionHandler).toDynamicValue(context => new core_1.JsonRpcConnectionHandler(about_service_1.aboutServicePath, () => context.container.get(about_service_1.aboutServiceSymbol))).inSingletonScope();
    bind(node_1.BackendApplicationContribution).to(cloudide_backend_contribution_1.CloudIdeBackendContribution).inSingletonScope();
});
//# sourceMappingURL=cloudide-backend-module.js.map