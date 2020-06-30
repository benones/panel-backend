import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', UserController.store);
routes.post('/users', UserController.store);

export default routes;
