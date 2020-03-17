let arr = [10, 15, 2, 3, 5, 15, 25, 31];

function swap(items, a, b) {
  let temp = items[a];
  items[a] = items[b];
  items[b] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i != min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

console.log(selectionSort(arr));
