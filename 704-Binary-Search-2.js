const nums = [0, 2, 4, 6, 8, 10];

const search = (nums, target) => {
    let L = 0;
    let R = nums.length - 1;

    while (L <= R) {
        let M = Math.floor((L + R) / 2);
        if (nums[M] == target) {
            return M;
        } else if (target > nums[M]) {
            L = M + 1;
        } else {
            R = M - 1;
        }
    }
    return -1;
};

let x = search([-1, 0, 3, 5, 9, 12], 9);

console.log("============", x);
