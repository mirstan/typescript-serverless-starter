import { DynamoDB } from 'aws-sdk';
import * as uuid from 'uuid';

import Item from './types/Item';

const dynamoDb = new DynamoDB.DocumentClient();

export async function handler(email: string): Promise<Item> {

  const params = {
    TableName: 'Table',
    Item: { 
      id: uuid.v4(),
      email,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    },
  };

  await dynamoDb.put(params).promise();
  return params.Item;
}
