const max = (a, b) => {
  return a > b ? a : b;
};

const findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count = 0;
    } else {
      count++;
      result = max(count, result);
    }
  }
  return result;
};

const nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));
