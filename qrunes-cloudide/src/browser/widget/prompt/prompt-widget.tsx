/**
 * Copyright (C) OriginQ 2021
 * This ts file provide prompt widget
 */
import {ReactWidget} from "@theia/core/lib/browser/widgets/react-widget";
import { injectable, postConstruct } from 'inversify';
import * as React from "react";

@injectable()
export class PromptWidget extends ReactWidget {

    static readonly ID = 'keyBind:prompt';
    static readonly LABEL = 'key bind prompt'

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = PromptWidget.ID;
        this.title.label = PromptWidget.LABEL;
        this.title.caption = PromptWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-bars';
        this.update();
    }

    protected render(): React.ReactNode {
        return <div className="prompt-mt">
            <table>
                <caption>快捷键绑定</caption>
                <thead>
                    <tr>
                        <td>命令</td><td>键位</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>查找</td><td>ctrlcmd + f</td>
                    </tr>
                    <tr>
                        <td>撤销</td><td>ctrlcmd + z</td>
                    </tr>
                    <tr>
                        <td>复制</td><td>ctrlcmd + c</td>
                    </tr>
                    <tr>
                        <td>复制路径</td><td>shift + alt +c</td>
                    </tr>
                    <tr>
                        <td>恢复</td><td>ctrlcmd + shift +z</td>
                    </tr>
                    <tr>
                        <td>剪切</td><td>ctrl + x</td>
                    </tr>
                    <tr>
                        <td>切换大纲视图</td><td>ctrlcmd + shift +i</td>
                    </tr>
                    <tr>
                        <td>切换调试控制台视图</td><td>ctrlcmd + shift + y</td>
                    </tr>
                    <tr>
                        <td>切出调用层级视图</td><td>ctrlcmd + shift + f1</td>
                    </tr>
                    <tr>
                        <td>切换历史视图</td><td>alt + h</td>
                    </tr>
                    <tr>
                        <td>切换输出视图</td><td>ctrlcmd + shift + u</td>
                    </tr>
                    <tr>
                        <td>切换代码管理视图</td><td>ctrlcmd + shift +g</td>
                    </tr>
                    <tr>
                        <td>切换资源管理器视图</td><td>ctrlcmd + shift + e</td>
                    </tr>
                    <tr>
                        <td>全选</td><td>ctrlcmd + a</td>
                    </tr>
                    <tr>
                        <td>替换</td><td>ctrlcmd + alt + f</td>
                    </tr>
                    <tr>
                       <td>调试</td><td>ctrlcmd + f5</td>
                    </tr>
                    <tr>
                        <td>转到工作区中的符号</td><td>ctrlcmd + o</td>
                    </tr>
                    <tr>
                        <td>Debug:单步进入</td><td>f11</td>
                    </tr>
                    <tr>
                        <td>Debug:单步跳出</td><td>shift + f11</td>
                    </tr>
                    <tr>
                        <td>Debug:单步跳过</td><td>f10</td>
                    </tr>
                    <tr>
                        <td>Debug:继续</td><td>f5</td>
                    </tr>
                    <tr>
                        <td>Debug:启动调试</td><td>f5</td>
                    </tr>
                    <tr>
                        <td>Debug:停止调试</td><td>shift + f5</td>
                    </tr>
                    <tr>
                        <td>Debug:暂停</td><td>f6</td>
                    </tr>
                    <tr>
                        <td>Debug:重启调试</td><td>cltrcmd + shift + f5</td>
                    </tr>
                    <tr>
                        <td>删除行</td><td>shift + ctrl + k</td>
                    </tr>
                    <tr>
                        <td>Editor:后退</td><td>alt + left</td>
                    </tr>
                    <tr>
                        <td>Editor:前进</td><td>alt + right</td>
                    </tr>
                    <tr>
                        <td>转到上一次编辑位置</td><td>ctrl + alt + q</td>
                    </tr>
                    <tr>
                        <td>保存</td><td>ctrlcmd + s</td>
                    </tr>
                    <tr>
                        <td>打开文件</td><td>ctrlcmd + p</td>
                    </tr>
                    <tr>
                        <td>删除</td><td>del</td>
                    </tr>
                    <tr>
                        <td>新建文件</td><td>alt + n</td>
                    </tr>
                    <tr>
                        <td>重命名</td><td>f2</td>
                    </tr>
                    <tr>
                        <td>打开新终端</td><td>ctrl + shift + `</td>
                    </tr>
                    <tr>
                        <td>清除终端</td><td>ctrlcmd + k</td>
                    </tr>
                    <tr>
                        <td>拆分编辑器</td><td>ctrlcmd + \</td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }

}
