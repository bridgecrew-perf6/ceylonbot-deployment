
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
    const giftResponse = slots.giftResponse;
    const yesNo = slots.yesNo;

    // const lookingFor = slots.lookingFor; //User Input
    if (interestingQuestion === "I'm not sure") {
        callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));

    } else if (interestingQuestion === "I don't know") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
    } else if (interestingQuestion === "Tell me what I need") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
    } else if (interestingQuestion === "I can figure it out") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        
    } else if (interestingQuestion === "I can lead ") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        
    } else if (interestingQuestion === "I know what I need") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        
    } else if (interestingQuestion === "Tell me") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        
    } else if (interestingQuestion === "You can lead me") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        
    } else if (interestingQuestion === "what would you recommend") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        
    } else if (interestingQuestion === "Tell me") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
       
    } else if (interestingQuestion === "You are the one") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
    
    }
    
    
    if (giftResponse === "love") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "electronics") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "skin care") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "book") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "drinks") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "bag") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "appreciation") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "food") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "products") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "vehicle") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "admiration") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "money") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "car") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "phone") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "furniture") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "dog") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    } else if (giftResponse === "pet") {
        if (yesNo === "Yes") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Hmmm...let me take a look at what I can find for you.\n Respond with "facial products" for our products or "other" for more options`}));
        } else if (yesNo === "No") {
            callback(close(sessionAttributes, 'Fulfilled',
            {'contentType': 'PlainText', 'content': `Respond with "facial products" for our products or "other" for more options`}));
        }
    }

}
// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
// exports.handler = (event, context, callback) => {
//     try {
//         console.log(`event.bot.name=${event.bot.name}`);
//         dispatch(event, (response) => {callback(null, response);});
//     } catch (err) {
//         callback(err);
//     }
// };

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