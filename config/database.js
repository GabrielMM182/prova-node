const sql = require('mssql')

// meu sql conectando com o BD
const config = 'mssql://sa:123456@DESKTOP-436GPST/\SA/prova'; //meu pc

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};

