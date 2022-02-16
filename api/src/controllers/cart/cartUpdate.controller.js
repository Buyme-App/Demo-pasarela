const showErrors = require('../../messageConsole');
const { Cart, Client } = require('../../database/db');

async function cartUpdateDB(clientId, items) {
    try{

        const result = await Client.findOne( {where: { id: clientId}});
        console.log(result);

        if ( result===null) return 404 //carrito cliente no se encuentra no es modificacion es creacion
        else {
            const cart = await Cart.findOne( {where: {clientId: clientId}});
            
            // cart.items[0].id} cart.items[0].quantity  asi accedo a cart.items con subindices por productos
            if (cart===null) return 404;
            else {
                 cart.items=items;
                 cart.save()
                 .then ((success) => {
                     return 200
                 })
                 .catch((error)=>{
                     return 404
                 })
            }
        };

    }catch(e) {
        showErrors('cartUpdateDB', e);
        return 404;
    }
    
};

module.exports = cartUpdateDB;

