const {Router} = require('express');
const route = Router();




route.get('/', (req, res) => {

    res.send('Home Page!!!');
});





module.exports = route;