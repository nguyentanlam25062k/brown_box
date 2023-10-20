const checkIfExist = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n ; j++) {
      if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) {
        return true;
      }
    }
  }
  return false;
};

const arr = [10, 2, 5, 3];
console.log(checkIfExist(arr));
