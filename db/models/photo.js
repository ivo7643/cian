const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Apartment }) {
      this.belongsTo(Apartment, { foreignKey: "apartmentId" });
    }
  }
  Photo.init(
    {
      apartmentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Apartments", key: "id" },
      },
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Photo",
    }
  );
  return Photo;
};