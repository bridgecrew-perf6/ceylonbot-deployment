'use strict';

const uuidV1 = require('uuid/v1');
const AWS = require('aws-sdk');
const promisify = require('es6-promisify');
const _ = require('lodash');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.saveOrderToDatabase = function(userId) {
  console.log('saveOrderToDatabase');

  const item = {};
  item.orderId = uuidV1();
  item.userId = userId;

  return saveItemToTable('product-order-table', item);
};

module.exports.saveUserToDatabase = function(userId) {
  console.log('saveUserToDatabase');

  const item = {};
  item.userId = userId;

  return saveItemToTable('product-user-table', item);
};

module.exports.findUserFavorite = function(userId) {
  const params = {
    TableName: 'product-user-table',
    Key: {
      userId
    }
  };

  const getAsync = promisify(dynamo.get, dynamo);

  return getAsync(params).then(response => {
    if (_.isEmpty(response)) {
      console.log(`User with userId:${userId} not found`);
      return Promise.reject(new Error(`User with userId:${userId} not found`));
    }
    return response.Item;
  });
};

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