const lexResponses = require('./lexResponses');

module.exports = function(intentRequest) {
  const source = intentRequest.invocationSource;

  // greet the user upon arrival to system
  if (source === 'FulfillmentCodeHook') {
    return Promise.resolve(lexResponses.close(intentRequest.sessionAttributes, 'Fulfilled', null));
  }
};