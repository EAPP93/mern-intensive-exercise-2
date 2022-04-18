/**
 * Root Router
 * Redirection to Routers
 */

import { LogInfo } from '../utils/logger'
import express, { Request, Response } from 'express'
import helloRouter from './HelloRouter'

// server instance
const server = express()

// router instance
const rootRouter = express.Router()

// Activate for requests to http://localhost:8000/api

// Get: http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('Get: http://localhost:8000/api')
    // Send Hello World
    res.send('Welcome to my api restful: express + typescript + Nodemon')
})

// Redirections to Routers & Controllers
server.use('/', rootRouter)
server.use('/hello', helloRouter)

export default server
