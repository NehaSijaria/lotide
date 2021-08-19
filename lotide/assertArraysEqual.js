const eqArrays = function (arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
};

const assertArraysEqual = function (a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 3, 2]);