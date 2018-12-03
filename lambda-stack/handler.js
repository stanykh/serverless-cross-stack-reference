'use strict';
const uuid = require('uuid');
const AWS = require('aws-sdk');
let dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.createUser = async (event, context) => {
  let timestamp = new Date().toISOString();
  let id = uuid.v1();
  let params = {
    TableName: process.env.DYNAMODB_USER_TABLE,
    Item: {
      id: id,
      email: event.email,
      createdAt: timestamp
    }
  };

  let result = await dynamoDB.put(params).promise();
  return result;
};
