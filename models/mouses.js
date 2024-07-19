'use strict';
var Sequelize = require("sequelize");
//var Registro = require("./registros");
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class mouses extends Model {
    static associate(models) {
    }
  };
  mouses.init({
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    materialCarcasa: {
        type: DataTypes.STRING,
        allowNull: false
      },
    cantidadBotones: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    tipoRueda: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dpiSensor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longCable: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'mouses',
  });
  return mouses;
};