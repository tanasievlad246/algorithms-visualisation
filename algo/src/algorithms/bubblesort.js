import * as HF from '../algorithms/helperfunctions';

export async function bubbleSort(arr) {
  //let elements = document.getElementsByTagName("Bar");
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j].n > arr[j + 1].n) {
        arr[j + 1].color = 'blue';
        arr[j].color = 'green';
        HF.arraySwap(arr, j + 1, j);
        await HF.sleep();
        arr[j].color = 'red';
        arr[j + 1].color = 'red';
      }
    }
  }
  return arr;
}
