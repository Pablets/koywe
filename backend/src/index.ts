import mongoose from 'mongoose'

import { app } from './app'

const start = async () => {
    if (!process.env.JWT_KEY) {
        process.env.JWT_KEY = 'asdf'
        // throw new Error('JWT_KEY must be defined')
    }
    if (!process.env.MONGO_URI) {
        process.env.MONGO_URI =
            'mongodb+srv://dbuser:34178962@cluster0.yvhof.mongodb.net/koiwe?authSource=admin&replicaSet=atlas-cioczq-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true'
        // throw new Error('MONGO_URI must be defined')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log('Connected to AUTH MongoDb')
    } catch (err) {
        console.error(err)
    }

    app.listen(3001)
    app.on('listening', () => {
        console.log('Listening on port 3001!!!')
    })
}

start()
