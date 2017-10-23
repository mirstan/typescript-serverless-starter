import { Context, Handler, ProxyCallback, ProxyResult } from 'aws-lambda';
import randomString from './helpers';

// Handler
const handler: Handler = (event: any, context: Context, callback: ProxyCallback) => {
  const response: ProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      result: randomString(9),
    }),
  };

  callback(undefined, response);
};

export { handler };
