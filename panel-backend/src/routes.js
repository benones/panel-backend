import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/userboard', UserController.store);

export default routes;
