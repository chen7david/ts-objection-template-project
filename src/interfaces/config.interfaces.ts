export interface IToken {
    secret: string | undefined;
    ttl: string | undefined;
}

export interface IJWT {
    access: IToken;
    refresh: IToken;
}

export interface IServer {
    protocol: string;
    hostname: string;
    port: string;
}

export interface IDB {
    client: string;
    database: string | undefined;
    username: string | undefined;
    password: string | undefined;
    port: string | undefined;
    poolMax?: number;
    poolMin?: number;
}

export interface IBodyParser {
    multipart: boolean;
    keepExtensions: boolean;
    uploadDir: string;
    maxFileSize: number
}

export interface IUpload {
    directory: string;
}

export interface IConfig {
    server: IServer;
    jwt?: IJWT;
    bodyparser?: IBodyParser;
    upload?: IUpload;
    db: IDB;
}

export interface IGlobalConfig {
    developement: IConfig;
    production: IConfig;
}