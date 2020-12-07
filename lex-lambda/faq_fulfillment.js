'use strict';


     
// Close dialog with the customer, reporting fulfillmentState of Failed or Fulfilled ("Thanks, your pizza will arrive in 20 minutes")
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

function elicit_slot(session_attributes, intent_name, slots, slot_to_elicit, message) {
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'ElicitSlot',
            'intentName': intent_name,
            'slots': slots,
            'slotToElicit': slot_to_elicit,
            'message': message
        }
    }
}

function delegate(session_attributes, slots) {
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'Delegate',
            'slots': slots
        }
    }
}

// --------------- Events -----------------------
 
function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    
    const type = slots.questionType; //User Input
    const question = slots.question


    if (type === "order") {
        if (question === "returns") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Our return policy is really simple. We don't accpet returns or exchanges for items!`}));
        } else if (question === "missing product" || question === "missing package") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Damn porch pirate are getting really annoying these days! Just shoot an email to support@ceylonskincare.com to get a replacement. Make sure to do this within 48 hrs!!`}));
        } else {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Sorry, but I didn't understand you, follow this link to read up on our faq! https://www.ceylonskincare.com/pages/help-faq   `}));
        }
    } else if (type === 'shipping') {
        if (question === "delivery options") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `We currently only use UPS to ship in the US. For international shipping DHL will be used.`}));
        } else if ( question === "shipping fees") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Shipping fees are quite simple with us, but it'll be too messy to spit out a bunch of words and numbers so just vist this link to know: https://www.ceylonskincare.com/pages/help-faq`}));
        } else if ( question === "international fees" || question === "custom fees") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `For international fees, it's the same as shipping fees, you are expected to pay them.`}));
        } else if ( question === "track order" || question === "order tracking") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Make sure to check your email for a tracking number of your order.`}));
        }
    } else if (type === 'product') {
        if (question === "expiration date") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Our product expires 36 months from production day. It shouldn't be a problem for most people, but if you have and issues, which I doubt, or 
                                                    have a question contact support@ceylonskincare.com.`}));
        } else if (question === "product usage" || question === "who can use") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Our product can be used by everyone. Our products are meant to be used by people who have sensitve skin, so it doesn't matter if you are female
                                                    or not a person of color!`}));
        } else {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Oh no! I couldn't understand a thing you said. Please visit our FAQ or contact the support team`}));
        }
        
    }
    
    
    // callback(close(sessionAttributes, 'Fulfilled',
    // {'contentType': 'PlainText', 'content': `Okay,${product}`}));
    
}

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
