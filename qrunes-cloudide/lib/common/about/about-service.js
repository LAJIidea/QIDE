"use strict";
/**
 * This ts file provide about common data used be the frontend and backends
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutLoggerName = exports.aboutServiceSymbol = exports.aboutServicePath = void 0;
/**
 * The api path to run the service over
 */
exports.aboutServicePath = '/services/about';
/**
 * A unique symbol to guarantee the correct Ioc object is resolved
 */
exports.aboutServiceSymbol = Symbol(exports.aboutServicePath);
exports.aboutLoggerName = 'mbs-about';
//# sourceMappingURL=about-service.js.map