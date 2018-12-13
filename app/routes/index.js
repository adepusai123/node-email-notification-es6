import express from 'express';
import mailer from './mailer';
const Router = express.Router();

Router.use('/mailer', mailer);

export default Router;