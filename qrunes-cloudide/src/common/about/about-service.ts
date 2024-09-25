/**
 * This ts file provide about common data used be the frontend and backends
 */

export interface AboutInfo {

    licensePath: string;
    tpipPath: string;
    releaseNotes?: string;
    additional?: string;

}

export interface PodInfo {

    instanceId: string;
    apiKey: string;
    userId: string;
    imageApi: string
}


/**
 * The strongly-typed service interface
 */
export interface AboutService {
    buildAPI(instanceId: string, imageName: string): Promise<any>;

    /**
     * Method to get the platform information
     * @return the platform information
     */
    getInfo(): Promise<AboutInfo>;
    getPodInfo(): Promise<PodInfo>;
    getInstanceId(): Promise<string>;
}

/**
 * The api path to run the service over
 */
export const aboutServicePath = '/services/about';

/**
 * A unique symbol to guarantee the correct Ioc object is resolved
 */
export const aboutServiceSymbol = Symbol(aboutServicePath);

export const aboutLoggerName: string = 'mbs-about';