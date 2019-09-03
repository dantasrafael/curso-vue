const config = require('../knexfile.js')
const knex = require('knex')(config)

// iniciar o banco de dados ao levantar a aplicação
// não utilizar em produção
knex.migrate.latest([config])
module.exports = knex