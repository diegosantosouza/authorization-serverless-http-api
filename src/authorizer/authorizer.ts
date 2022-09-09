import type { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
  if (event.headers.authorization === process.env.AUTHORIZATION_KEY) {
    return { isAuthorized: true };
  }

  return { isAuthorized: false };
};
