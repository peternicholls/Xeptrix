/*
  Xeptrix - Test Suite

  /src/__tests__/Greeter.test.ts
*/

import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
