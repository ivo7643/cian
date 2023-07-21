/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Users", [
      {
        login: "admin",
        password: await bcrypt.hash("admin", 10),
        email: "123@mail.ru",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: "Тося",
        password: "123",
        email: "345@mail.ru",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
