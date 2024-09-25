import { ContainerModule, injectable } from 'inversify';
import {
    bindViewContribution,
    FrontendApplicationContribution,
    WebSocketConnectionProvider,
    WidgetFactory
} from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';
import { UserInfoContribution } from './widget/title/userinfo-contribution';
import { UserInfoWidget } from './widget/title/userinfo-widget';
import { BackendClient, UserInfoBackendService, USER_INFO_BACKEND_PATH, UserInfoBackendWithClientService, USER_INFO_BACKEND_WITH_CLIENT_PATH } from '../node/common/protocol';
import { WelcomePageContribution } from './widget/welcome/welcome-page-contribution';
import { CommandContribution, MenuContribution, ILogger } from '@theia/core';
import { WelComePageWidget } from './widget/welcome/welcome-page-widget';
import { about, FrotendAbout } from './about/frontend-about';
import { AboutContribution } from './about/about-contribution';
import { AboutService, aboutServiceSymbol, aboutServicePath, aboutLoggerName } from '../common/about/about-service';
import { PromptContribution } from "./widget/prompt/prompt-contribution";
import { PromptWidget } from "./widget/prompt/prompt-widget";

export default new ContainerModule(bind => {

    // bind UserInfo widget
    bindViewContribution(bind, UserInfoContribution);
    bind(FrontendApplicationContribution).toService(UserInfoContribution);
    bind(UserInfoWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: UserInfoWidget.ID,
        createWidget: () => ctx.container.get<UserInfoWidget>(UserInfoWidget)
    })).inSingletonScope();

    // bind welcome page widget
    bindViewContribution(bind, WelcomePageContribution);
    bind(CommandContribution).toService(WelcomePageContribution);
    //      bind(MenuContribution).toService(WelcomePageContribution);
    bind(FrontendApplicationContribution).toService(WelcomePageContribution);
    bind(WelComePageWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: WelComePageWidget.ID,
        createWidget: () => context.container.get<WelComePageWidget>(WelComePageWidget)
    })).inSingletonScope();

    // bind prompt
    bindViewContribution(bind, PromptContribution);
    bind(FrontendApplicationContribution).toService(PromptContribution);
    bind(PromptWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: PromptWidget.ID,
        createWidget: () => ctx.container.get<PromptWidget>(PromptWidget)
    })).inSingletonScope();

    // bind about
    bind(about).to(FrotendAbout).inSingletonScope();
    bind(AboutContribution).toSelf().inSingletonScope();
    bind(CommandContribution).toService(AboutContribution);
    bind(MenuContribution).toService(AboutContribution);

    // bind logger
    bind(ILogger).toDynamicValue(ctx => {
        const logger = ctx.container.get<ILogger>(ILogger);
        return logger.child(aboutLoggerName);
    }).inSingletonScope().whenTargetNamed(aboutLoggerName);

    // connect about backend
    bind(aboutServiceSymbol).toDynamicValue(context => {
        const provider = context.container.get(WebSocketConnectionProvider);
        return provider.createProxy<AboutService>(aboutServicePath);
    }).inSingletonScope();

    // connect userinfo backend
    bind(BackendClient).to(BackendClientImpl).inSingletonScope();
    bind(UserInfoBackendService).toDynamicValue(ctx => {
        const connection = ctx.container.get(WebSocketConnectionProvider);
        return connection.createProxy<UserInfoBackendService>(USER_INFO_BACKEND_PATH);
    }).inSingletonScope();

    // connect backend callback client example
    bind(UserInfoBackendWithClientService).toDynamicValue(ctx => {
        const connection = ctx.container.get(WebSocketConnectionProvider);
        const backendClient: BackendClient = ctx.container.get(BackendClient);
        return connection.createProxy<UserInfoBackendWithClientService>(USER_INFO_BACKEND_WITH_CLIENT_PATH, backendClient);
    }).inSingletonScope();

});

@injectable()
class BackendClientImpl implements BackendClient {
    getName(): Promise<string> {
        return new Promise(resolve => resolve('client'));
    }
}
