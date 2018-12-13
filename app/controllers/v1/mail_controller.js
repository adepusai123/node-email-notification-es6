import { MailService } from '../../services';

export default class MailController {
    //static method not request any new instance to access
    static async welcome(request, response, next) {
        try {
            const msg = await MailService.message();
            response.send(msg);    
        } catch (error) {
            next(error);            
        }
    }
}