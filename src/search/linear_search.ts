const numberArray = Array.from({ length: 100 }, (_, index) => index);
const targetNumber = 82;
let operations = 0;

const linearSearch = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
    operations += 1;
  }
  return -1;
};

console.log(linearSearch(numberArray, targetNumber), "operations:", operations);
