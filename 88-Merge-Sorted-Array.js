const insertElementToArray = (elm, size, arr) => {
    let isFind = false
    for (let k = 0; k < size; k++) {
        if (elm < arr[k]) {
            isFind = true
            for (let i = size - 1; i >= k; i--) {
                arr[i + 1] = arr[i]
            }
            arr[k] = elm
            break
        }
    }
    if (isFind === false) {
        arr[size] = elm
    }
}

const merge = function (nums1, m, nums2, n) {
    nums2.forEach((num) => {
        insertElementToArray(num, m, nums1)
        m++
    })
    return nums1
}

// Two pointer
const merge_2 = function (nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while (k >= 0) {
        if (i < 0) {
            nums1[k] = nums2[j]
            j--
        } else if (j < 0) {
            nums1[k] = nums1[i]
            i--
        } else if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    return nums1
}

// console.log(merge([0], 0, [1], 1))

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
