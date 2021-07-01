const Bills = require ('../models/bills.model');

exports.create = async(req, res) =>{
    const bills = await Bills.create(req.body);

    if(bills){
        res.status(200).send({message:' bills criada com sucesso'})
    }else{
        res.status(500).send({message:'Erro ao cadastrar '});
    }
}


exports.getAll = async(req, res) =>{
     
    const bills = await Bills.getAll();
    res.status(200).send(bills)

} 

exports.delete = async(req, res) => {
    const bills = await Bills.delete(req.params.id, req.body);

    if(bills) {
        res.status(200).send({message:'deletado com sucesso'})
    }else{
        res.status(200).send({message:'Erro ao deletar'});

    }
}
