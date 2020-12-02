'use strict';

// set constant variable
const uuidV1 = require('uuid/v1');
const AWS = require('aws-sdk');
const promisify = require('es6-promisify');
const _ = require('lodash');
const dynamo = new AWS.DynamoDB.DocumentClient();

// save current message to db
module.exports.saveMessageToDatabase = function(itemId) {
  console.log('saveMessageToDatabase');

  const item = {};
  item.orderId = uuidV1();
  item.itemId = itemId;

  return saveItemToTable('product-order-table', item);
};

// save entire backlog conversating to db
module.exports.saveBackLogToDatabase = function(itemId) {
  console.log('saveBackLogToDatabase');

  const item = {};
  item.BackLogId = BackLogId;

  return saveItemToTable('product-user-table', item);
};

// find users favorite items
// ex: beaches, landmarks, shops
module.exports.findUserFavorite = function(itemId) {
  const params = {
    TableName: 'product-user-table',
    Key: {
      itemId
    }
  };

  const getAsync = promisify(dynamo.get, dynamo);

  // make sure item is not null
  return getAsync(params).then(response => {
    if (_.isEmpty(response)) {
      console.log(`User with userId:${itemId} not found`);
      return Promise.reject(new Error(`User with userId:${itemId} not found`));
    }
    return response.Item;
  });
};

// save entire log to db
function saveItemToTable(tableName, item) {
  const params = {
    TableName: tableName,
    Item: item
  };

  const putAsync = promisify(dynamo.put, dynamo);

  return putAsync(params)
    .then(() => {
      console.log(`Saving item ${JSON.stringify(item)}`);
      return item;
    })
    .catch(error => {
      Promise.reject(error);
    });
}