'use strict';
var Sequelize = require("sequelize");
//var Registro = require("./registros");
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class camaras extends Model {
    static associate(models) {
    }
  };
  camaras.init({
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    lente: {
        type: DataTypes.STRING,
        allowNull: false
      },
    sensor: {
        type: DataTypes.STRING,
        allowNull: false
      },
    tamanioPantalla: {
      type: DataTypes.STRING,
      allowNull: false
    },
    materialCarcasa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidadBotones: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'camaras',
  });
  return camaras;
};