/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Apartments", [
      {
        name: "Домик",
        category: "дом",
        price: 99999,
        description: "тупа избушка",
        map: "https://avatars.dzeninfra.ru/get-zen_doc/4864152/pub_6391f3c97831e117643876f9_639215f821a7532cbe2583a4/scale_1200",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Бабкина комната",
        category: "комната",
        price: 999,
        description: "вчера бабка ушла в мир иной, сдам",
        map: "https://www.vsem-kvartira.ru/wp-content/uploads/2021/10/kvartira-sssr-1024x512.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "квартира lux",
        category: "квартира",
        price: 99999,
        description: "золотой унитаз, полный жир",
        map: "https://www.vgrealty.ru/images/articles/165/thumbs/0c008b102.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Apartments", null, {});
  },
};
