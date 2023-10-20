const removeDuplicates = function (nums) {
  let l = 0;
  for (let r = 1; r < nums.length; r++) {
    if (nums[l] === nums[r]) {
      continue;
    }
    nums[++l] = nums[r];
  }
  return l + 1;
};
