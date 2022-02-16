const showErrors = require('../../messageConsole');
const { Cart, Client } = require('../../database/db');

async function cartUpdateDB(clientId, items) {
    try{

        const result = await Client.findOne( {where: { id: clientId}});
     
        if ( result===null) return 404 //no existe cliente
        else {
            const cart = await Cart.findOne( {where: {clientId: clientId}});
            console.log('cart.items');
            console.log(cart.items);
            console.log('------------------------------------------------');
            
            //cart.items[0].id} cart.items[0].quantity  asi accedo a cart.items con subindices por productos
            console.log(cart===null);
            if (cart===null) return 404;
            else {
                //  console.log(items);   
                 cart.items=items;
                 cart.save()
                 .then ((success) => {
                    console.log('cart deberia grabar');
                    console.log(cart.items);
                     return 200;
                 })
                 .catch((error)=>{
                     return 400;
                 })
            }
        };

    }catch(e) {
        showErrors('cartUpdateDB', e);
        return 400;
    }
    
};

module.exports = cartUpdateDB;

