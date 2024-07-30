// Array manipulation

let t0 = performance.now();
const myArray = [1, 2, 4, 8, 16, 32, 64, 128];

const doubleArray = [];
const forEachArray = myArray.forEach((num) => {
  doubleArray.push(num * 2);
});
console.log("forEach", doubleArray);

const large = new Array(1000).fill("");

const mapArray = myArray.map((num) => {
  return num * 2;
});

console.log("map", mapArray);

const filterArray = myArray.filter((num) => num > 10);

console.log("filter", filterArray);

const reduceArray = myArray.reduce((accumulator, num) => {
  // return Math.max(accumulator, num);
  return accumulator + num;
});

console.log("reduce", reduceArray);

let t1 = performance.now();

console.log("execution", t1 - t0);
