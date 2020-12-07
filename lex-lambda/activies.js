'use strict';
// Close dialog with the customer, reporting fulfillmentState of Failed or Fulfilled ("Thank you for ordering from Ceylon.")
function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}
// --------------- Events -----------------------
function dispatch(intentRequest, callback) {
    console.log('request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}');
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const city = slots.city;
    const activity = slots.activity
    if (city === "San Francisco" || city === "SF") {
        if (activity === "sightseeing") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': 'Bay Bridge'}));
        }   else if (activity === "hotel") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': 'SF Hotel'}));
        }
    } else if (city === "Los Angeles" || city === "LA") {
        if (activity === "sightseeing") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': 'Rodeo Drive'}));
        }   else if (activity === "hotel") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': 'LA Hotel'}));
        }
    } else {
        callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': 'Test'}));
    }
}
// --------------- Main handler -----------------------
// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};