const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
















































/**
 * Rota /  Recurso
 */

 /**
  * Metodo HTTP:
  * 
  * GET:  Buscar/listar uma indformação do back-end
  * POST: criar uma informação no back-end
  * PUT:alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * 
   * Tipos de parâmetros:
   * 
   * Query Parms: Parâmetros nomeados enviados na rota após "?" (Filtos/Paginação)
   * Route Parms: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição ,utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgrreSQL, Oracle, Microsoft SQL Serve
    * NoSQL: MongoDB, CoutchDB, etc
    */

    /**
     * Driver: SELEC * FROM users
     * Query Builder: table('users').select('*').where()
     */



