'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class registros extends Model {
    static associate(models) {

    }
  };
  registros.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },    
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entrada: {
        type: DataTypes.TIME,
        allowNull: false
    },
    salida: {
        type: DataTypes.TIME,
        allowNull: true
    },
  }, {
    sequelize,
    modelName: 'registros',
  });
  return registros;
};