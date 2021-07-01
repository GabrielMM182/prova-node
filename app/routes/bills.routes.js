module.exports = app => {
    const billsController = require('../controllers/bills.controller');

    app.route('/api/cadastrar')
    .get(billsController.getAll) 

    app.route('/api/cadastrar')
    .post(billsController.create);

    app.route('/api/cadastrar/:id')
    .delete(billsController.delete);

}