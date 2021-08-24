const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
it('Should returns [3] for [1, 3, 4]', () => {
assert.deepEqual(middle([1, 3, 4]), [3]);
});
it('Should returns [3] for [1, 2, 3, 4, 5]', () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
});
it('Should returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
});

});
