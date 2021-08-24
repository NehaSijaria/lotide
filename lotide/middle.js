  const eqArrays = function(arr1, arr2) {
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
  }
  
  const assertArraysEqual = function(a1, a2) {
    if (eqArrays(a1, a2)) {
      console.log(`✅ Assertion Passed: [${a1}] === [${a1}]`);
    } else {
      console.log(`🔴 Assertion Failed: [${a1}] !== [${a2}]`);
    }
  }
  
const middle = function(arr){
  let newArray = [];
  let len = arr.length;
  let index = len / 2
  if(len < 2){
    return [];
  } else if ( len % 2 === 0) {  
      newArray.push(arr[index-1], arr[index]);
      return newArray;
  } else {
      let oddIndex = Math.floor(index)
      newArray.push(arr[oddIndex]);
      return newArray;
    } 
  }

// TEST CODE
// ...
  
console.log(middle([1, 3, 4])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]);