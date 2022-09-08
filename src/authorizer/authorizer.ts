import type { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
  console.log(event);
  if (event.headers.authorization === '123') {
    return { isAuthorized: true };
  }
  return { isAuthorized: false };
};
