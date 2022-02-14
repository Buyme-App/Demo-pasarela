const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("invoice", {
    //factura
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    products: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(25, 2),            //Se modifica para agregar luego de acreditado el pago
      allowNull: true,                            //SE TRANSFORMA DE INTEGER A DECIMALES
    },
    clientId: {
      type: DataTypes.INTEGER,           //Se agrega como clave para acceder a Modelo Client
      allowNull: false,
    },
    MPpreferenceId: {
      type: DataTypes.STRING,         //Se agrega para poner el campo de conexion de Mp entre la generacion de la operacion y el resultado
      allowNull: true,
    },
    payApproved: {                        //Se agrega como para asentar si se acredito mercado pago
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    refunded: {
      type: DataTypes.BOOLEAN,            //Se agrega para cuando se devuelve el pago
      defaultValue: false,
    },
    merchantOrderMP: {                        //Se agrega como para asentar el numero de merchant Order de MP
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    readyToDeliver: {                     //Se agrega como campo para especificar que se pago y se puede entregar ya
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
};
