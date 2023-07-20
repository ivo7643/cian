"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "дом",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "квартира",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "комната",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
