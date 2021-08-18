const eqArrays = function (arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
};

const assertArrayEqual = function (a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [1, 3, 2]);