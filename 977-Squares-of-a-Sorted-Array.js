const square = (a) => {
  return a * a;
};

const sortedSquares = function (nums) {
  return nums
    .map((num) => square(num))
    .sort((a, b) => {
      return a - b;
    });
};

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
