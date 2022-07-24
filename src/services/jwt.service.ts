import JWT from 'jsonwebtoken'
import config from 'src/config'

export function signAccessToken(userId: string) {
    return JWT.sign({ userId }, config.jwt.access.secret, { expiresIn: config.jwt.access.ttl })
}

export function signRefreshToken(userId: string) {
    return JWT.sign({ userId }, config.jwt.refresh.secret, { expiresIn: config.jwt.refresh.ttl })
}

export function verifyAccessToken(token: string) {
    return JWT.verify(token, config.jwt.access.secret)
}

export function verifyRefreshToken(token: string) {
    return JWT.verify(token, config.jwt.refresh.secret)
}
