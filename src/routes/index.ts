import express, { Router } from 'express';

//import imagesRouter from './images.routes'; //Exemplo

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello Word' })
);
// middleware
routes.use(express.json());
routes.use(express.urlencoded());

//routes.use('/images', imagesRouter); //Exemplo

export default routes;
