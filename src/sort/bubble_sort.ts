const unsortedArray: number[] = [
  15, 6, 23, 9, 12, 30, 4, 18, 7, 21, 3, 28, 10, 17, 25, 1, 29, 5, 20, 8, 14,
  27, 11, 24, 2, 19, 26, 13, 16, 22,
];
let operations = 0;


const bubbleSort = (arr: number[]): number[] => {
  let swapped: boolean;
  
  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; //Swap elem
        swapped = true;
      }
      operations++;
    }
  } while (swapped);
  return arr;
};

console.log(bubbleSort(unsortedArray), "operations:", operations);
