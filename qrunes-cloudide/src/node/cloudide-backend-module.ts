import { ConnectionHandler, JsonRpcConnectionHandler} from '@theia/core';
import { ContainerModule } from 'inversify';
import { UserInfoBackendService, USER_INFO_BACKEND_PATH, UserInfoBackendWithClientService, BackendClient, USER_INFO_BACKEND_WITH_CLIENT_PATH } from './common/protocol';
import { UserInfoBackendServiceImpl } from './service/userinfo-service';
import { UserInfoBackendWithClientServiceImpl } from './service/userInfo-backend-client-service';
import { BackendApplicationContribution } from '@theia/core/lib/node';
import { CloudIdeBackendContribution } from './api/cloudide-backend-contribution';
import { aboutServiceSymbol, aboutServicePath } from '../common/about/about-service';
import { BackendAboutService } from './service/backend-about-services';


export default new ContainerModule(bind => {
    bind(UserInfoBackendService).to(UserInfoBackendServiceImpl).inSingletonScope();
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler(USER_INFO_BACKEND_PATH, () => {
            return ctx.container.get<UserInfoBackendService>(UserInfoBackendService);
        })
    ).inSingletonScope();

    bind(UserInfoBackendWithClientService).to(UserInfoBackendWithClientServiceImpl).inSingletonScope();
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler<BackendClient>(USER_INFO_BACKEND_WITH_CLIENT_PATH, client => {
            const server = ctx.container.get<UserInfoBackendWithClientServiceImpl>(UserInfoBackendWithClientService);
            server.setClient(client);
            client.onDidCloseConnection(() => server.dispose());
            return server;
        })
    ).inSingletonScope();

    // bind about backend service
    bind(aboutServiceSymbol).to(BackendAboutService).inSingletonScope();

    bind(ConnectionHandler).toDynamicValue(context =>
        new JsonRpcConnectionHandler(aboutServicePath, () =>
            context.container.get(aboutServiceSymbol)
        )
    ).inSingletonScope();

    bind(BackendApplicationContribution).to(CloudIdeBackendContribution).inSingletonScope();
})
