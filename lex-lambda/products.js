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

// Helper functions

function build_validation_result(is_valid, violated_slot, message_content) {
    if (message_content === null) {
        return {
            "isValid": is_valid,
            "violatedSlot": violated_slot,
        }
    }

    return {
        'isValid': is_valid,
        'violatedSlot': violated_slot,
        'message': {'contentType': 'PlainText', 'content': message_content}
    }
}

function validater(product, age) {
    const products = ["facial wash", "facial toner", "facial moisturizer", "facial set"]
    
    if (product != null && !(product.toLowerCase() in products)) {
        return build_validation_result(false,
                                        'Products',
                                        'We do not have {}, please choose something else')
    }
    
    // if (isNaN(age)) {
    //     return build_validation_result(false,
    //                                     'a',
    //                                     'That is not a number please enter a number')
    // }
    
}


// --------------- Events -----------------------
 
function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    
    const product = slots.product; //User Input


    if (product.toLowerCase() === "Facial Wash".toLowerCase()) {
        callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Okay, you choose ${product}. Follow the following link for the product:\n https://www.ceylonskincare.com/products/facial-wash`}));
    } else if (product.toLowerCase() === 'Facial Set'.toLowerCase()) {
        callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Okay, you chose ${product}. Follow the following link for the product: \n https://www.ceylonskincare.com/products/ceylon-skincare-set`}));
    } else if (product.toLowerCase() === 'Facial Toner'.toLowerCase()) {
        callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Okay, you chose ${product}. Follow the following link for the product: \n https://www.ceylonskincare.com/products/facial-toner`}));
    } else if (product.toLowerCase() === 'Facial Moisturizer'.toLowerCase()) {
        callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Okay, you chose ${product}. Follow the following link for the product: \n https://www.ceylonskincare.com/products/facial-moisturizer`}));
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
