/// <reference types="node" />
/// <reference types="node" />
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import { BackendApplicationContribution } from "@theia/core/lib/node";
export declare class CloudIdeBackendContribution implements BackendApplicationContribution {
    constructor();
    configure(app: express.Application): void;
    onStart(server: http.Server | https.Server): void;
}
//# sourceMappingURL=cloudide-backend-contribution.d.ts.map