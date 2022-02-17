const express = require("express");

const routeHome = require("./home.routes");

//carrito de compras
const cartUpdate = require('./cart/carUpdate.routes'); //agregar para modificar carrito
const addCard = require("./cart/addCart.routes"); 

const createClient = require('../routes/createClient.routes')

//mp
const mp = require("./mercadopago/mpAccess.route"); //agregar para mercado pago
const notificationOrder = require("./mercadopago/notificationOrder.route"); // agregar para recibir notificacion

const routes = (server) => {
  server.use("/home", routeHome);
  //mp
  server.use("/mp", mp); //agregar para mercado pago
  server.use("/notification", notificationOrder); // Se agrega para el url de respuesta

  //carrito de compras
  server.use("/cartUpdate", cartUpdate); //Se agrega para el carrito
  server.use("/addCart", addCard);

  server.use('/createCliente', createClient);
};

module.exports = routes; // Update
