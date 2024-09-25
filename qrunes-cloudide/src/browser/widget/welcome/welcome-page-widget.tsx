/**
 * This ts file provide welcome page widget
 */

import { CommandRegistry } from "@theia/core/lib/common";
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import { ApplicationInfo, ApplicationServer } from "@theia/core/lib/common/application-protocol";
import { injectable, inject } from 'inversify';
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { OpenerService, ApplicationShell } from '@theia/core/lib/browser';
import { EXPLORER_VIEW_CONTAINER_ID } from "@theia/navigator/lib/browser";
import { postConstruct } from "@theia/core/shared/inversify";
import * as React from 'react';
// import URI from "@theia/core/lib/common/uri";


@injectable()
export class WelComePageWidget extends ReactWidget {

    static readonly ID = 'originq.getting.started.widget';
    static readonly LABEL = 'Getting Started';

    protected applicationInfo: ApplicationInfo | undefined;

    @inject(ApplicationServer)
    protected readonly appServer: ApplicationServer;

    @inject(CommandRegistry)
    protected readonly commandRegistry: CommandRegistry;

    @inject(WorkspaceService)
    protected readonly workspaceService: WorkspaceService;

    @inject(OpenerService)
    protected readonly openerService: OpenerService;

    @inject(ApplicationShell) protected readonly shell: ApplicationShell;

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = WelComePageWidget.ID;
        this.title.label = WelComePageWidget.LABEL;
        this.title.caption = WelComePageWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-info';

        this.applicationInfo = await this.appServer.getApplicationInfo();
        this.update();
    }

    protected render(): React.ReactNode {
        return <div className='gs-container'>
            {this.renderHeader()}
            <hr className='gs-hr'/>
            <div className="flex-grid">
                <div className='col'>
                    {this.renderFeatureSection('启动', 'fa fa-play', (
                        <p><a style={{color: "#007ACC"}} onClick={this.openFile}>新建文件</a>
                            <br/>
                            <a style={{color: "#007ACC"}} onClick={this.openFolder}>新建文件夹</a>
                        </p>
                    ), this.openCreateProject)}
                </div>
            </div>
            <div className="flex-grid">
                <div className='col'>
                    {this.renderFeatureSection('自定义', 'fa fa-opera', (
                        <p><a style={{color: "#007ACC"}} onClick={this.openTheme} id="bold-p">颜色主题</a><br/>
                            使编辑器和代码呈现你喜欢的外观
                        </p>
                    ), this.openCreateProject)}
                </div>
            </div>
            <div className="flex-grid">
                <div className="col">
                    {this.renderFeatureSection('学习', 'fa fa-graduation-cap', (
                        <div>
                            <p id="bold-p">查找和运行命
                            </p>
                            <p>使用命令面板快速访问和搜索命令(Ctrl+Shift+p)</p>
                            <p><a style={{color: "#007ACC"}} onClick={this.openKeyBind}>点击查看快捷键详情</a></p>
                        </div>
                    ), this.openCreateProject)}
                </div>
            </div>
            <div className="flex-grid">
                <div className="col">
                    {this.renderFeatureSection('QRunes Editor', 'fa fa-quor', (
                        <p>OriginQ IDE允许您编辑和运行QRunes文件。OriginQ IDE对QRunes语言有很好的支持，例如运行时可视化界面、代码提示、
                            错误检查等。双击文件资源管理器中的文件"demo.qrunes"体验QRunes编辑器。详细的QRunes教程<a style={{color: "#007ACC"}} href="https://qrunes-tutorial.readthedocs.io/en/latest/index.html" target='_blank'>点击这里</a>
                        </p>
                    ), this.openCreateProject)}
                </div>
            </div>
            <div className="flex-grid">
                <div className="col">
                    {this.renderFeatureSection('PyQPanda Editor', 'fa fa-pinterest-p', (
                        <p>OriginQ IDE允许您使用PyQPanda(Python语言量子编程框架)。借助OriginQ IDE可以完美实现PyQPanda所有功能。双击文件资源管理器中的文件"demo.py"体验PyQPanda编辑器。
                            详细的PyQPanda教程<a style={{color: "#007ACC"}} href="https://pyqpanda-toturial.readthedocs.io/zh/latest/index.html" target='_blank'>点击这里</a>
                        </p>
                    ), this.openCreateProject)}
                </div>
            </div>
            <div className="flex-grid">
                <div className="col">
                    {this.renderFeatureSection('QPanda Editor', '', (
                        <p>根据集成的C++环境，我们可以轻松地在OriginQ IDE中对QPanda进行量子编程实验，并且使用强大的调试功能来调试代码。双击文件浏览器中的文件"demo.cpp"
                            来体验QPanda编辑器！
                            详细的QPanda教程<a style={{color: "#007ACC"}} href="https://qpanda-tutorial.readthedocs.io/zh/latest/" target='_blank'>点击这里</a>
                        </p>
                    ), this.openCreateProject)}
                </div>
            </div>
        </div>;
    }

    protected renderHeader(): React.ReactNode {
        return <div className='gs-header'>
            <h1>OriginQ IDE <span className='gs-sub-header'>Getting Started</span></h1>
            <p>OriginQ IDE是一个基于web的开发工具, 专门用于量子计算编程。请参阅下面的部分, 以了解更多更多可用功能</p>
        </div>;
    }

    protected renderFeatureSection(title: string, icon: string, description: JSX.Element, opener: () => void): React.ReactNode {
        return <div className='gs-section'>
            <a href='#' onClick={opener}>
                <h3 className='gs-section-header'>
                    <i className={icon}></i>
                    {title}
                    <span style={{marginLeft: '5px'}}>
                        <i className='fas fa-external-link-alt'/>
                    </span>
                </h3>
            </a>
            {description}
            <div className='gs-action-container'>

            </div>
        </div>
    }

    protected renderVersion(): React.ReactNode {
        return <div className='gs-section'>
            <div className='gs-action-container'>
                <p className='gs-sub-header gs-version'></p>
            </div>
        </div>
    }

    protected renderHelp(): React.ReactNode {
        return <div className='gs-setion'>
            <h3 className='gs-section-header'>
                <i className='fa fa-question-circle'></i>
                Help and more information
            </h3>
            <div className='gs-action-container'>
                <a href="" target='_blank'>Ask a question</a>
            </div>
            <div className='gs-action-container'>
                <a href="" target='_blank'>Report an issue</a>
            </div>
            <div className="gs-action-container">
                <a href="" target="_blank">Github project with cide and more info</a>
            </div>
            <div className="gs-action-container">
                <a href="" target="_blank">Customize your own quantum IDE</a>
            </div>
        </div>
    }

    protected openFileExplorer = () => this.shell.revealWidget(EXPLORER_VIEW_CONTAINER_ID);
    // protected openQRunesFile = () => open(this.openerService, new URI(`${this.workspaceService.workspace?.uri}/demo.qrunes`))
    // protected openPythonFile = () => open(this.openerService, new URI(`${this.workspaceService.workspace?.uri}/demo.py`))
    // protected openCppFile = () => open(this.openerService, new URI(`${this.workspaceService.workspace?.uri}/demo.cpp`))
    protected openCreateProject = () => this.commandRegistry.executeCommand("cloudide.createProject");

    protected openFile = () => this.commandRegistry.executeCommand("file.newFile");
    protected openFolder = () => this.commandRegistry.executeCommand("file.newFolder");
    protected openTheme = () => this.commandRegistry.executeCommand("workbench.action.selectTheme");
    protected openKeyBind = () => this.commandRegistry.executeCommand("open.prompt");
}
