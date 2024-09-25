import { injectable } from "inversify";
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import { localStorage } from "../storage/storageInfo";
import { BackendApplicationContribution } from "@theia/core/lib/node";

@injectable()
export class CloudIdeBackendContribution implements BackendApplicationContribution {

    constructor() {}

    configure(app: express.Application): void {
        app.get('/cloudidebackend', (req, res) => {
            let username = req.body.username;
            let userId = req.body.userId;
            let containerId = req.body.containerId;
            let userInfo = { 'username': username, 'userId': userId, 'containerId': containerId };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            res.json({'code': 0})
        })
        app.get('/getUserInfo', (req, res) => {
            let userInfo = localStorage.getItem('userInfo');
            res.json(JSON.parse(userInfo));
        })
        app.get('/getContainerId', (req, res) => {
            let containerId = localStorage.getItem('containerId');
            res.json({'containerId': containerId})
        })
        app.get('/activity', (req, res) => {
            console.log("收到请求");
            localStorage.setItem('activityTime', Date.now());
            res.json({'code': 0})
        })
    }

    onStart(server: http.Server | https.Server): void {
        let address = server.address();
        console.log(address);
        localStorage.setItem('address', address);
    }

}
