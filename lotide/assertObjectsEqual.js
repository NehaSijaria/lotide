// const { assertObjectsEqual } = require(".");

const assertObjectsEqual = function(object1, object2) {
  let keyArray1 = Object.keys(object1); // [a, b]
  if(object1.length != object2.length) {
    return false;
  }
    for (let element of keyArray1) { // Each element of array => a...b...
      // objects are not equivalent
      if (object1[element] !== object2[element]) { // value of main object
          return false; 
      }
  }
  return true;
};

// const ab = { a: '1', b: 2 };
// const ba = { b: 2, a: '1' };
// const ca = { c: 2, a: '1' };
// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, ca);
// assertObjectsEqual(ab, abc);


module.exports = assertObjectsEqual;