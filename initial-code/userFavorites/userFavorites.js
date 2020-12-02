'use strict';

const databaseManager = require('../databaseManager');

// export userId
module.exports = function(userId) {
  console.log(userId);

  // lists out the most frequent items
  databaseManager.saveUserToDatabase(userId).then(item => {
    console.log(item);
  });
};