import { BasicResponse, GoodByeResponse } from '../types/'

export interface IHelloController {
    getMessage(name?:String) : Promise<BasicResponse>
}

export interface IGoodByeController {
    message(name?:String, date?:String) : Promise<GoodByeResponse>
}
