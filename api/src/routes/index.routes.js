const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {

    res.send('Home Page!!!!!');
})




module.exports = router; // Update