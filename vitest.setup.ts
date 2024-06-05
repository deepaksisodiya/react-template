import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { server } from './src/mocks/server';

beforeAll(() => server.listen({}));
afterAll(() => server.close());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
