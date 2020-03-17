let arr = [10, 15, 2, 3, 5, 15, 25, 31];

function insertionSort(arr) {
  let len = arr.length,
    value,
    i,
    j;

  for (i = 0; i < len; i++) {
    value = arr[i]; //store the curent value because it may shift later
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      console.log(j);
      arr[j + 1] = arr[j];
      console.log(arr[j + 1], arr[j]);
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertionSort(arr));
