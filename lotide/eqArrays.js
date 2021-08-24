const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
  // // check if arrays are of equal size, if not the nreturn false
  // if (arr1.length !== arr2.length) {
  //   result = false;
  // }
  // arr1.forEach((item, index) => {
  //   // do something
  //   if (arr2[index] !== item) {
  //     result = false;
  //   }
  // });
};

module.exports =  eqArrays;