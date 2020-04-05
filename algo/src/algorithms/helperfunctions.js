export function arraySetWithoutIndexes(array, index, value) {
  array.splice(index, 1, value);
}

export function arraySwap(array, indexA, indexB) {
  var x = array[indexA];
  arraySetWithoutIndexes(array, indexA, array[indexB]);
  arraySetWithoutIndexes(array, indexB, x);
}

export function sleep(sleepTime) {
  return new Promise((resolve) => setTimeout(resolve, sleepTime));
}
