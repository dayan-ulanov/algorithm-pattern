const unsortedArray: number[] = [
  15, 6, 23, 9, 12, 30, 4, 18, 7, 21, 3, 28, 10, 17, 25, 1, 29, 5, 20, 8, 14,
  27, 11, 24, 2, 19, 26, 13, 16, 22,
];
let operations = 0;

const selectionSort = (arr: number[]): number[] => {
  let i = 0;
  while (i < arr.length - 1) {
    let minIndex = i;
    let j = i + 1;
    while (j < arr.length) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      operations++
      j++
    }
    if (arr[minIndex] !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    i++
  }
  return arr
};

console.log(selectionSort(unsortedArray), "operations:", operations);
