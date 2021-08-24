const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });
  it("should return ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Hello', 'Labs']);
  });
});

