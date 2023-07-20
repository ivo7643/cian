const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Apartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favorite, Photo }) {
      this.hasMany(Favorite, { foreignKey: "apartmentId" });
      this.hasMany(Photo, { foreignKey: "apartmentId" });
    }
  }
  Apartment.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      category: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      map: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      mainPhoto: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Apartment",
    }
  );
  return Apartment;
};
