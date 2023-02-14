import { setupServer } from 'msw/node';
import fetch from 'node-fetch';

import { handlers } from './handlers';

// @ts-expect-error: https://github.com/mswjs/interceptors/pull/283
global.fetch = fetch;

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
