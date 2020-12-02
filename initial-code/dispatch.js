'use strict';

const orderProduct = require('./chatbot/chatbot');
const greetUser = require('./greetUser');

// request intent from lex
module.exports = function(intentRequest) {
  console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
  const intentName = intentRequest.currentIntent.name;

  // check intents to see if they were called from lex
  // if not then handle error
  console.log(intentName + ' was called');
  if (intentName === 'ProductOrder') {
    return orderProduct(intentRequest);
  }

  if (intentName === 'GreetingIntent') {
    return greetUser(intentRequest);
  }

  // handle error
  throw new Error(`Intent with name ${intentName} not supported`);
};