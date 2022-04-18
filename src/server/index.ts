import express, { Express, Request, Response } from 'express'

// security
import cors from 'cors'
import helmet from 'helmet'

// Root Router
import rootRouter from '../routes'

// create express server
const server: Express = express()

// define server to use "/api" and use rootRouter from 'index.ts' in routes
server.use(
    '/api',
    rootRouter
)

// security config
server.use(helmet())
server.use(cors())

// content type
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// redirection config
// http://localhost:8000/ ------> http://localhost:8000/api
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})

export default server
