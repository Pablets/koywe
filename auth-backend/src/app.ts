import express, { Request, Response, urlencoded } from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'

import { CorsOptions } from 'cors'
import cors from 'cors'
import { NotFoundError } from './errors/not-found-error'
import { errorHandler } from './middlewares/error-handler'

// CORS
const corsOptions: CorsOptions = {
    // origin: `${process.env.ORIGIN_URL || 'http://localhost:8080'}`,
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    // origin: process.env.NODE_ENV === 'test' ? '*' : /(^http:\/\/localhost:)\d{4}/,
    allowedHeaders: ['Content-Type', 'Authorization', 'session'],
    credentials: true,
    preflightContinue: true,
    methods: ['GET', 'POST', 'OPTIONS'],
}

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(cors(corsOptions))
// app.options('*', cors(corsOptions))
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test',
    })
)
// app.use(urlencoded({ extended: true }))
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

//eslint-disable-next-line
app.all('*', async (_req: Request, _res: Response) => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }
