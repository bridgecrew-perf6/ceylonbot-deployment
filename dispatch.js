'use strict';

const orderProduct = require('./chatbot/chatbot');
const greetUser = require('./greetUser');

module.exports = function(intentRequest) {
  console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
  const intentName = intentRequest.currentIntent.name;

  console.log(intentName + ' was called');
  if (intentName === 'ProductOrder') {
    return orderProduct(intentRequest);
  }

  if (intentName === 'GreetingIntent') {
    return greetUser(intentRequest);
  }

  throw new Error(`Intent with name ${intentName} not supported`);
};