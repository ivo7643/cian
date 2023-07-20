/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Photos", [
      {
        apartmentId: 1,
        url: "https://i.pinimg.com/originals/25/90/a1/2590a1a6759841581e6e1ed7fc91376d.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        apartmentId: 2,
        url: "https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Photos", null, {});
  },
};
