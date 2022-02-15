const { Router } = require("express");
const router = Router();
const bodyParser = require("body-parser");
// const { SELLER_ACCESS_TOKEN } = process.env;

//llamas a la sdk de mercadopago ya instalada
const mercadopago = require("mercadopago");
const showErrors = require("../../messageConsole");
const createInvoiceDB = require("../../controllers/mercadopago/createInvoiceMP.controller");

router.use(bodyParser.urlencoded({ extended: false }));

//Agregar credenciales de mercado pago   credencial de prueba (pero produccion) del vendedor
mercadopago.configure({
  access_token: 'APP_USR-795368609311295-020422-fae769e7be0de3e4c4c28f63f524af45-1068887150',
});



router.post("/", async (req, res) => {
  // Crea un objeto de preferencia que se envia a mercado pago
  // let {name, quantity, price } = req.body;           //vienen los items del front
  // const {clientId, products} = req body
  let clientId = 1; //hardcodeado tiene que venir del front
  console.log('>>>>>>>>>>>>>>>>>>>>>fkdjfkdj')
  const itemsHard = [
    // reemplaza lo que va a venir del front
    {
      title: "Camiones de jueguete",                      //equivale a name del modelo Product
      unit_price: 10,           //100.25                   
      quantity: 1,
    },
    {
       title: "Autitos Matchbox",
      unit_price: 1500,
      quantity: 3,
    },
    {
      title: "Autitos Tomica",
      unit_price: 100,
      quantity: 3,
    },
    {
      title: "Autos Welly",
      unit_price: 100,
      quantity: 2,
    },
  ];

  try {
    console.log('Antes<<<<<')
    let preference = {
      binary_mode: true, //el pago se acepta o rechaza, ninguna cosa mas
      statement_descriptor: "Buyme App Shop", //envia descripcion del negocio a la tarjeta
      items: itemsHard,
      shipments: {
        cost: 0,
        mode: "not_specified",
      }, // establece el costo de envio por defecto
      back_urls: {
        success: "http://localhost:3000/success.html", //     ANDUVO TODO OK
        pending: "http://localhost:3000/pending.html", //ESTAMOS PROCESANDO TU PAGO Y TE AVISA SI SE ACREDITA
        failure: "http://localhost:3000/failured.html", //           TE DA LA OPCION DE VOLVER AL SITIO (ACA) CUANDO ALGO FALLA
      },
      notification_url: "https://demo-pasarela.herokuapp.com/notification", //"https://mercadopago-checkout.herokuapp.com/webhook", NO SE QUE HACE
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        const valor = response.body.id;
        console.log('DESPUES<<<<<',clientId, itemsHard, valor)
        createInvoiceDB(clientId, itemsHard, valor)
          .then(function (response1) {})
          .catch(function (error) {
            console.log(error);
          });
        res.redirect(response.body.init_point); //se usa el init point de producttion
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (e) {
    showErrors("/mp", e);
    return 404;
  }
});

module.exports = router;



// "purpose": "wallet_purchase", //con esto se acepta solo usuarios con mp registrado/