const express = require("express");
const cors = require("cors");
const routes = require("./routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros, paginação) (/users?name=Italo&page=2&idade=25) (const params = request.query;)
  * Route Params: Parâmetros utilizados para identificar recursos (/users/:id) (const params = request.params;)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (const body = request.body;)
  */

  /**
   * SQL: MySQL, SQLite, Oracle, Microsoft, SQL Server
   * NoSQL: MongoDB, CouchDB, etc 
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */


  

