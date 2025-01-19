let arr = [6, 4, 2, 3, 7, 6, 10 ,15];

function min(array) {
  return Math.min(...array);
}

function max(array) {
  return Math.max(...array);
}

console.log(min(arr));
console.log(max(arr)); 

///////////

let minMax = (array) => {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return [max, min];
};

let [mx, mn] = minMax(arr);
console.log("Max", mx);
console.log("Min", mn);