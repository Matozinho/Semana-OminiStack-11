const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;

/**
 * Rota/Recurso
 */

/** 
 * Métodos HTTP
 * 
 * GET: Buscar/listar ua informalçao do backend
 * POST: Criar uma informação no Backend
 * PUT: Alterar informação no Backend
 * DELETE: Deletar uma informação no backend
 */
/**
 * Tipos de parâmetros
 * 
 * Query Params(?...): parâmetros nomeados enviados na rota após o simbolo de interrogação (filtros, paginação)
 * Route Params(/:...): Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * Banco de Dados
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft Sql Server
  * NoSQL: MongoDB, CouchDB. (Não relaionais)
  */
 /**
  * Driver: SELECT * FROM users (forma de escrita)
  * Query Builder: table('users').select('*').where() 
  */
