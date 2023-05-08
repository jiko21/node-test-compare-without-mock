const assert = require('node:assert/strict');
const { someFunc1 } = require('./mock');

describe('mock sample', () => {
  test('mock already existing object method', () => {
    expect(someFunc1()).toBe(3);
  });
});
