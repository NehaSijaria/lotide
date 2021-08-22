const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  // // ALTERNATE SHORTER METHOD
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;

  // let result = true;
  // // check if arrays are of equal size, if not the nreturn false
  // if (arr1.length !== arr2.length) {
  //   result = false;
  // }
  // arr1.forEach((item, index) => {
  //   // do something
  //   if (arr2[index] !== item) {
  //     result = false;
  //   }
  // }  );
  // return result;
};
// Aletrnate Way
const eqObjects = function(object1, object2) {
  let firstObjLenght;
  let secObjLenght;
  firstObjLenght = Object.keys(object1).length;
  secObjLenght = Object.keys(object2).length;

  if (firstObjLenght === secObjLenght) {
    for (let key1 in Object.keys(object1)) {
      for (let key2 in Object.keys(object2)) {
        if (key1 === key2) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects(ab, ba), false);
assertEqual(eqObjects(ab, abc), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, dc), false);


const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), true);
assertEqual(eqObjects(cd, cd2), false);
