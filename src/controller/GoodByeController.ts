import { IGoodByeController } from './interfaces'
import { GoodByeResponse } from './types'
import { LogSuccess } from '../utils/logger'

export class GoodByeController implements IGoodByeController {
    public async message (name?: String, date?:String): Promise<GoodByeResponse> {
        LogSuccess('[/api/goodbye] Get Request')
        return {
            message: `Goodbye ${name || 'user'}`,
            Date: `${date}`
        }
    }
}
