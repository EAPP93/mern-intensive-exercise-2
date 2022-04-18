import express, { Request, Response } from 'express'
import { HelloController } from '../controller/HelloController'
import { LogInfo } from '../utils/logger'

// router from express
const helloRouter = express.Router()

// http://localhost:8000/api/hello/
helloRouter.route('/')
    .get(async (req: Request, res:Response) => {
        // obtain a querey param
        const name: any = req?.query?.name
        LogInfo(`Query Param: ${name}`)

        // controller instance to excute method
        const controller: HelloController = new HelloController()

        // obtain response
        const reponse = await controller.getMessage(name)

        // send to the client the response
        return res.send(reponse)
    })

export default helloRouter
