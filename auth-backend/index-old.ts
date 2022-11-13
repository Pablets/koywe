// import * as path from 'path'

// import cors, { CorsOptions } from 'cors'
// import express, { Express, Router, urlencoded, json } from 'express'
// import getFiles from './util/getFiles'
// import cookieSession from 'cookie-session'
// import mongoose from 'mongoose'
// import { errorHandler } from './middlewares/error-handler'

// const startServer = async (port: number): Promise<void> => {
//     const app: Express = express()
//     const router: Router = Router()
//     app.use(errorHandler)
//     app.use(
//         cookieSession({
//             signed: false,
//             secure: process.env.NODE_ENV !== 'test',
//         })
//     )

//     if (!process.env.JWT_KEY) {
//         process.env.JWT_KEY = 'asdf'
//         // throw new Error('JWT_KEY must be defined')
//     }
//     if (!process.env.MONGO_URI) {
//         process.env.MONGO_URI =
//             'mongodb+srv://dbuser:34178962@cluster0.yvhof.mongodb.net/koiwe?authSource=admin&replicaSet=atlas-cioczq-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true'
//         // throw new Error('MONGO_URI must be defined')
//     }

//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//         })

//     } catch (err) {
//         console.error(err)
//     }

//     // CORS
//     const corsOptions: CorsOptions = {
//         // origin: `${process.env.ORIGIN_URL || 'http://localhost:8080'}`,
//         origin: /(^http:\/\/localhost:)\d{4}/,
//         allowedHeaders: ['Content-Type', 'Authorization'],
//         credentials: true,
//         preflightContinue: true,
//         methods: ['GET', 'POST'],
//     }

//     router.use(cors(corsOptions))
//     router.use(json())

//     //     app.all('*', async (req, res) => {
//     // 	throw new NotFoundError();
//     // });

//     router.use(urlencoded({ extended: true }))
//     router.use(errorHandler)

//     // Get routes
//     const files = await getFiles(path.join(process.cwd(), 'routes'))
//     files.map((file: string) => import(file).then(({ default: routes }) => routes(router)))

//     app.use(router)

//     // Start
//     app.listen(port, () => {
//         // eslint-disable-next-line no-console

//     })
// }

// startServer(3001)
//     .then()
//     .catch(error => {
//         console.error(error)
//     })
