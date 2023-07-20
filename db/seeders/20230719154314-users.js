/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Users", [
      {
        login: "admin",
        password: "admin",
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
