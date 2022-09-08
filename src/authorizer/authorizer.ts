import type { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
  const { path } = event;
  const nonAuthenticatedEndpoints = ['/open-route'];
  /* eslint-disable-next-line */
  for (const endpoint of nonAuthenticatedEndpoints) {
    const regex = new RegExp(`^${endpoint}`);
    if (regex.test(path)) return { isAuthorized: true };
  }

  if (event.headers.authorization === process.env.AUTHORIZATION_KEY) {
    return { isAuthorized: true };
  }

  return { isAuthorized: false };
};
