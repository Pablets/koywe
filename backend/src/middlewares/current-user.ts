import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface UserPayload {
    id: string
    email: string
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    const jwtCookie = req?.session?.jwt || req.headers?.cookie?.split('=')[1]

    if (!jwtCookie) {
        return next()
    }

    try {
        const payload = jwt.verify(jwtCookie, process.env.JWT_KEY!) as UserPayload
        req.currentUser = payload
    } catch (err) {
        console.log('currentUser', err)
    }

    next()
}
