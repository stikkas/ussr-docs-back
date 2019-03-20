import {Express} from 'express';
import * as MainController from './controllers/main';

export class Routes {
    static initRoutes(app: Express) {
        app.get('/', MainController.index);
        app.get('/dashboard', MainController.dashboard);
    }
}