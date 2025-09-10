interface ROConfig {
    version: number;
    development: boolean;
    remoteClient: string;
    servers: ROServerConfig[];
    packetDump: boolean;
    skipServerList: boolean;
    skipIntro: boolean;
    clientVersionMode: string;
    plugins: ROPlugin;
    clientHash: string | null;
    enableCashShop: boolean;
    enableBank: boolean;
    enableMapName: boolean;
    enableRefineUI: boolean;
    enableDmgSuffix: boolean;
    enableCheckAttendance: boolean;
    CameraMaxZoomOut: number;
    loadLua: boolean;
}
interface ROServerConfig {
    display: string;
    desc: string;
    address: string;
    port: number;
    version: number;
    langtype: number;
    packetver: string;
    forceUseAddress: boolean;
    packetKeys: boolean;
    socketProxy: string;
    adminList: number[];
}
interface ROPlugin {
    [key: string]: string;
}
interface Window {
    ROConfig: ROConfig;
}
declare var ROConfig: ROConfig;
declare module 'ROConfig' {
    export = ROConfig
}