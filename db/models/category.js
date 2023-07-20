"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Apartment }) {
      this.hasMany(Apartment, { foreignKey: "categoryId" });
    }
  }
  Category.init(
    {
      name: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
