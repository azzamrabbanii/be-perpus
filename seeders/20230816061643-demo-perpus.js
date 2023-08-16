'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('perpus', [{
      namaPeminjam: 'John',
      namaBuku: 'Buku A',
      tanggalPinjam: '2021-08-16',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      namaPeminjam: 'Muhammad',
      namaBuku: 'Buku B',
      tanggalPinjam: '2021-08-20',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('perpus', null, {});
  }
};
