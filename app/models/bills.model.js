const { poolPromise } = require('../../config/database');

// para puxar os valores em uma lista
exports.getAll = async() =>{

    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`SELECT * FROM bills WHERE customer`)

                return rs.recordset;
} 

// post vai criar

exports.create = async(dados) => {
    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`INSERT INTO bills (amount , product, paymentMethod, customer)
                VALUES ('${dados.amount}' , '${dados.product}' , '${dados.paymentMethod}' , '${dados.customer}')`);
                        
    return rs.rowsAffected;                                
}

// deletar pelo id 

exports.delete = async(id) => {
    const pool = await poolPromise;
    const rs = await pool   
                     .request()
                     .query(`DELETE from bills
                             WHERE id = ${id} `);
    return rs.rowsAffected;
}
