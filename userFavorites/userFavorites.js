'use strict';

const databaseManager = require('../databaseManager');

module.exports = function(userId) {
  console.log(userId);

  databaseManager.saveUserToDatabase(userId).then(item => {
    console.log(item);
  });
};