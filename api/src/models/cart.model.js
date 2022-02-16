const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cart", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    items: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
  });
};
