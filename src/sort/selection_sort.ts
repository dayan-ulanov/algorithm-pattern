const unsortedArray: number[] = [
  15, 6, 23, 9, 12, 30, 4, 18, 7, 21, 3, 28, 10, 17, 25, 1, 29, 5, 20, 8, 14,
  27, 11, 24, 2, 19, 26, 13, 16, 22,
];
let operations = 0;

const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      operations += 1;
    }

    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort(unsortedArray), "operations:", operations);
