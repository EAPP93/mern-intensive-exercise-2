import { LogSuccess } from '../utils/logger'
import { IHelloController } from './interfaces'
import { BasicResponse } from './types'

export class HelloController implements IHelloController {
    public async getMessage (name?: String): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request')
        return {
            message: `hello ${name || 'world!'}`
        }
    }
}
