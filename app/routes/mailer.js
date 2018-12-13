import express from 'express';
import { MailController } from '../controllers/v1';
const Router = express.Router();

Router.route('/').get(MailController.welcome);

export default Router;
