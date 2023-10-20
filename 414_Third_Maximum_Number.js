const insert = (maxArr, val) => {
    let i = 0
    while (i < maxArr.length) {
        if (val === maxArr[i]) return // Don't replace
        if (val > maxArr[i]) {
            break // insert val into maxArr[i]
        } else {
            i++
        }
    }
    if (i < maxArr.length) {
        for (let j = maxArr.length - 2; j >= i; j--) {
            maxArr[j + 1] = maxArr[j]
        }
        maxArr[i] = val
    }
}

const thirdMax = function (nums) {
    let maxArr = [-Infinity, -Infinity, -Infinity]
    for (let i = 0; i < nums.length; i++) {
        // console.log(maxArr)
        insert(maxArr, nums[i])
    }
    if (maxArr[2] === -Infinity) return maxArr[0]
    return maxArr[2]
}

// console.log(thirdMax([2, 2, 3, 1]))
// console.log(thirdMax([1, 2, -2147483648]))
// console.log(thirdMax([1, 2]))
