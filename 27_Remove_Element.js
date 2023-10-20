const removeElement = function (nums, val) {
    let n = nums.length
    for (let i = 0; i < n; ) {
        if (val === nums[i]) {
            // delete element nums[i]
            for (let j = i; j < n - 1; j++) {
                nums[j] = nums[j + 1]
            }
            n--
        } else {
            // not delete
            i++
        }
    }
    return n
}

// Two pointer
const removeElement_2 = function (nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

// console.log(removeElement_2([1, 2, 3, 4, 2], 2))
