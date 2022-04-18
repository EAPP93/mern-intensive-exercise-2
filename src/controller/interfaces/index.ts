import { BasicResponse } from '../types/'

export interface IHelloController {
    getMessage(name?:String) : Promise<BasicResponse>
}
