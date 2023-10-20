const duplicateZeros = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      for (let j = n - 2; j >= i + 1; j--) {
        arr[j + 1] = arr[j];
      }
      if (i + 1 < n) {
        arr[i + 1] = 0;
        i++;
      }
    }
  }
  return arr;
};

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(duplicateZeros(arr));
