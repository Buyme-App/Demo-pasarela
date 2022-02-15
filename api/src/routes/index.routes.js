const express = require("express");

const routeHome = require("./home.routes");

//mp
const mp = require("./mercadopago/mpAccess.route"); //agregar para mercado pago
const notificationOrder = require("./mercadopago/notificationOrder.route"); // agregar para recibir notificacion

const routes = (server) => {
  server.use("/home", routeHome);
  //mp
  server.use("/mp", mp); //agregar para mercado pago
  server.use("/notification", notificationOrder); // Se agrega para el url de respuesta
};

module.exports = routes; // Update
