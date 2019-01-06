declare module 'express-sslify' {
    import { RequestHandlerParams } from 'express-serve-static-core';

    export function HTTPS(
        options?: { trustProtoHeader?: Boolean }
    ): RequestHandlerParams
}