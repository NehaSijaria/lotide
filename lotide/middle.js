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

module.exports = middle;