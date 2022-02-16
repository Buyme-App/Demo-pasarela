// const showErrors = require("../../messageConsole");
const { Client } = require("../database/db");

async function createClient(
  firstName,
  lastName,
  email,
  password,
  country,
  phone,
  address,
  favorites
) {
  try {
    if (email === null) return 400;
    const result = await Client.findOne({
      where: { email: email },
    });
    if (result !== null) return 409;
    else {
      const result1 = await Client.create({
        firstName,
        lastName,
        email,
        password,
        country,
        phone,
        address,
        favorites,
      });
      return 201;
    }
  } catch (e) {
    showErrors("createClient", e);
    return 404;
  }
}

module.exports = createClient;
