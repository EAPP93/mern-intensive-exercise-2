import dotenv from 'dotenv'
import server from './src/server'
import { LogError, LogSuccess } from './src/utils/logger'

// config the .env file
dotenv.config()

const port: String | Number = process.env.PORT || 8000

// execute server
server.listen(port, () => {
    LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`)
})
