const { describe, test } = require('node:test');
const assert = require('node:assert/strict');
const { someFunc1 } = require('./mock');

describe('mock sample', () => {
  test('mock already existing object method', () => {
    assert.deepEqual(someFunc1(), 3);
  });
});
