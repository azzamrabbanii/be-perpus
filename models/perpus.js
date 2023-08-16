'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perpus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Perpus.init({
    namaPeminjam: DataTypes.STRING,
    namaBuku: DataTypes.STRING,
    tanggalPinjam: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perpus',
  });
  return Perpus;
};