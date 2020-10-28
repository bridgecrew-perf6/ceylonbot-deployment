'use strict';

const dispatch = require('./dispatch');
const userFavorites = require('./userFavorites/userFavorites');

// pull intents from lex
module.exports.intents = (event, context, callback) => {
  try {
    console.log(`event.bot.name=${event.bot.name}`);
    dispatch(event).then(response => {
      callback(null, response);
    });
  } catch (err) {
    callback(err);
  }
};

// save favorites and push to db
module.exports.saveUserFavorites = (event, context, callback) => {
  console.log('saveUserFavorites lambda called');

  var item = event.Records[0].dynamodb.NewImage;
  console.log(item);

  // user favorites from userfavorites.js
  userFavorites(item.userId.S);
  callback(null, null);
};