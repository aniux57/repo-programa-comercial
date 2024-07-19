'use strict';
var Sequelize = require("sequelize");
//var Registro = require("./registros");
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class llaves extends Model {
    static associate(models) {
    }
  };
  llaves.init({
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    material: {
        type: DataTypes.STRING,
        allowNull: false
      },
    tipoPlaca: {
        type: DataTypes.STRING,
        allowNull: false
      },
    bateria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transmisorHz: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'llaves',
  });
  return llaves;
};