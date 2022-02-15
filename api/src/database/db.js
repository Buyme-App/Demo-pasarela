require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DATABASE_URL
} = process.env;


//console.log(DB_USER);
//console.log(DB_PASSWORD);
//console.log(DB_HOST);
const sequelize = new Sequelize(DATABASE_URL,{
    logging: false, 
    native: false, 
    freezeTableName: true,
      ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "../models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models est n todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// console.log(sequelize.models)
const { Client, Invoice } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//asociacion de uno a muchos ----> Client a Invoice s
Client.hasMany(Invoice); //Clave externa definida en Invoice
Invoice.belongsTo(Client); //Clave externa definida en Invoice

module.exports = {
  ...sequelize.models,
  conn: sequelize, // para poder importar los modelos as¡: const { Product, User } = require('./db.js');
};
