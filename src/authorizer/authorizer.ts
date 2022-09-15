/* eslint-disable no-restricted-syntax */
import type { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
  const nonAuthenticatedEndpoints = ['/open-route'];

  for (const endpoint of nonAuthenticatedEndpoints) {
    const regex = new RegExp(`^${endpoint}`);
    if (regex.test(event.path)) return { isAuthorized: true };
  }

  if (event.headers.authorization === '123') {
    return { isAuthorized: true };
  }

  return { isAuthorized: false };
};
