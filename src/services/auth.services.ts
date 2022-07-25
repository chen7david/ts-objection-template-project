import JWT from 'jsonwebtoken'
import { IPayload } from 'src/interfaces/auth.interfaces'
import config from '../config'

export function signAccessToken(userId: number): string {
    return JWT.sign({ userId }, config.jwt.access.secret, { expiresIn: config.jwt.access.ttl })
}

export function signRefreshToken(userId: number): string {
    return JWT.sign({ userId }, config.jwt.refresh.secret, { expiresIn: config.jwt.refresh.ttl })
}

export function verifyAccessToken(token: string): IPayload {
    const payload = JWT.verify(token, config.jwt.access.secret)
    if (typeof payload == 'string' || payload.constructor === Object && !payload.hasOwnProperty('userId'))
        throw (new Error('invalid token'))
    return <IPayload>payload
}

export function verifyRefreshToken(token: string): IPayload {
    const payload = JWT.verify(token, config.jwt.refresh.secret)
    if (typeof payload == 'string' || payload.constructor === Object && !payload.hasOwnProperty('userId'))
        throw (new Error('invalid refresh token'))
    return <IPayload>payload
}