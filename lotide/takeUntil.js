const assertArraysEqual = function (a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
};

const eqArrays = function(arr1, arr2){
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
}

const takeUntil = function (array,callback) {
  let arr = [];
  for (let item of array) {
    if(!callback(item)){
      arr.push(item);
    } else {
      break;
    }
  }
return arr;

}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2 ]);