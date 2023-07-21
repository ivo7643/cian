const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Apartment, User }) {
      this.belongsTo(Apartment, { foreignKey: "apartmentId" });
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Favorite.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" },
        onDelete: 'CASCADE'
      },
      apartmentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Apartments", key: "id" },
        onDelete: 'CASCADE'
      },
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
