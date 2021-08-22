const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Passed`);
  } else {
    console.log(`⭕⭕⭕ Failed`);
  }
}

const findKey = function(obj, callback) {
  const result = {}
  for (let key in obj) {
    result[key] = callback(obj[key]);
    }
    for (let finalKey in result) {
      if(result[finalKey]){
         return finalKey;
      }
    }
}

const keyToFind = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const result1 = findKey(keyToFind, x => x.stars === 2) // => "noma"
console.log(result1);

assertEqual(findKey(keyToFind, x => x.stars === 1), "noma");
assertEqual(findKey(keyToFind, x => x.stars === 2), "noma");
assertEqual(findKey(keyToFind, x => x.stars === 3), "Ora");
assertEqual(findKey(keyToFind, x => x.stars === 1), "Blue Hill");