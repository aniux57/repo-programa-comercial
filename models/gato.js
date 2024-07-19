'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class gato extends Model {
    static associate(models) {

    }
  };
  gato.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'gato',
  });
  return gato;
};