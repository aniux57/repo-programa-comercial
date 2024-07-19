'use strict';
var Sequelize = require("sequelize");
//var Registro = require("./registros");
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class telefonos extends Model {
    static associate(models) {
    }
  };
  telefonos.init({
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    pantalla: {
        type: DataTypes.STRING,
        allowNull: false
      },
    bateria: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    placa_base: {
      type: DataTypes.STRING,
      allowNull: false
    },
    camara: {
      type: DataTypes.STRING,
      allowNull: false
    },
    altavoz: {
      type: DataTypes.STRING,
      allowNull: false
    },
    microfono: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'telefonos',
  });
  return telefonos;
};