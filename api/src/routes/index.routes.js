const express = require('express');
const routeHome = require('./home.routes');





const routes = (server) => {
    server.use('/home', routeHome);
    


}

module.exports = routes; // Update