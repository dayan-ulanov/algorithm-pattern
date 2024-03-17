const numberArray = Array.from({ length: 100 }, (_, index) => index);
const targetNumber = 82;
let operations = 0;

const binarySearch = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    operations += 1;
  }

  return -1;
};

console.log(binarySearch(numberArray, targetNumber), "operations:", operations);
