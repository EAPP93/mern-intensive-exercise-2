import express, { Request, Response } from 'express'
import { GoodByeController } from '../controller/GoodByeController'
import { LogInfo } from '../utils/logger'

// router from express
const goodByeRouter = express.Router()

// http://localhost:8000/api/goodbye/
goodByeRouter.route('/')
    .get(async (req:Request, res:Response) => {
        // obtain a querey param
        const name: any = req?.query?.name
        LogInfo(`Query Param: ${name}`)

        const date: String = new Date().toLocaleDateString('es-ES')

        // controller instance to excute method
        const controller: GoodByeController = new GoodByeController()

        // obtain response
        const reponse = await controller.message(name, date)

        // send to the client the response
        return res.send(reponse)
    })

export default goodByeRouter
