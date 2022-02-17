const { Router } = require("express");
// const showErrors = require("../../messageConsole");
const createClient = require("../controllers/createClient.controller");
const router = Router();

// Ruta para crear un customer (cliente),
// se le retorna  si fue creado o de lo contrario se devuelve un mensaje
//password viene hasheado desde el front
router.post("/", async (req, res) => {
  console.log('req<<<<<<<<<<<<', req)
  try {
    let {
      firstName,
      lastName,
      email,
      password,
      country,
      phone,
      address,
      favorites,
    } = req.body;

    const result = await createClient(
      firstName,
      lastName,
      email,
      password,
      country,
      phone,
      address,
      favorites
    );

    if (result === 201) return res.status(200).send("Customer was Created");
    else return res.status(400).send("Customer wasn't created");
  } catch (e) {
    showErrors("/createClient", e);
    return 404;
  }
});

module.exports = router;
