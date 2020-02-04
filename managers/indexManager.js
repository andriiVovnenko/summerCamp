const knex = require('./../knex');

const TABLE_NAME = "aboutAs";

module.exports = {
    aboutUs() {
      return knex(TABLE_NAME).select();
  },
    async changeAboutUs(text) {
        console.log(text);
        await knex(TABLE_NAME).update({ text });

    },

};
