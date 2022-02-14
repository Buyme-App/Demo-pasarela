// Se conecta a la BD con las credenciales de el archivo .env

require("dotenv").config();
const { Sequelize } = require("sequelize");
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://xnkskfubzlidys:aa49dd49f32d57474064ea527e3ca7551b3414a11eac71f8fe0fdf9cd600ba47@ec2-34-205-46-149.compute-1.amazonaws.com/d6v5jq7a9i0ren`,
  {
    // ecommerce es el nombre de la base de datos local
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    freezeTableName: true, //prevent sequelize from pluralizing table names
  }
);

module.exports = sequelize;
