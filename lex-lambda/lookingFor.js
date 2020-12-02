
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
    };
}
function delegate(session_attributes, slots) {
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'Delegate',
            'slots': slots
        }
    };
}
// Helper functions


// --------------- Events -----------------------
 
function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const interestingQuestion = slots.interestingQuestion;
    const lookingResponse = slots.lookingResponse;
    const giftResponse = slots.giftResponse;
    const yesNo = slots.yesNo;
    
    // const lookingFor = slots.lookingFor; //User Input
    if (interestingQuestion === "I'm not sure") {
        if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "I don't know") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "Tell me what I need") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "I can figure it out") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "I can lead ") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "I know what I need") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "Tell me") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "You can lead me") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "what would you recommend") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "Tell me") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    } else if (interestingQuestion === "You are the one") {
        if (lookingResponse === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (lookingResponse === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Well if you need more options respond with "other" for more options`}));
        }
    }
    
    
    if (giftResponse === "love") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "electronics") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "skin care") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "book") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "drinks") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "bag") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "appreciation") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "food") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "products") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "vehicle") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "admiration") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "money") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "car") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "phone") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "furniture") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "dog") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "pet") {
        if (yesNo === "I'm sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "I'm not sure") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    }



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