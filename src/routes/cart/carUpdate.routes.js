const showErrors = require('../../messageConsole');
const Router = require('express');
const router = Router();
const cartUpdateDB = require('../../controllers/cart/cartUpdate.controller');
// endpoint para actualizr el carrito DB cart, pisa todos los datos
router.put('/', async (req, res)=> {
    try {
        //Recibimos:     
        //clientId = Id del cliente
        //items =  [{id, quantity },{id, quantity },{id, quantity }...]
        const {clientId, items} = req.body;

        const result = await cartUpdateDB(clientId, items);
        console.log(`resultado result: ${result}`);
        if (result!==400) res.status(200).send('Cart Updated')
        else res.status(400).send('Bad Request');
        
    }catch(e) {
        showErrors('/cartUpdate', e);
        return 404;
    }
})

module.exports=router;

