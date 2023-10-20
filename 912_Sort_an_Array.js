const merge = (array_1 = [], array_2 = []) => {
    let n = array_1.length + array_2.length
    let result = []

    let i = 0,
        i1 = 0,
        i2 = 0

    while (i < n) {
        if (i1 < array_1.length && i2 < array_2.length) {
            // array_1 && array_2 != null
            if (array_1[i] < array_2[i]) {
                result[i] = array_1[i1]
                i1++
                i++
            } else {
                result[i] = array_2[i2]
                i2++
                i++
            }
        } else {
            // array_1 or array_2 == null
            if (i1 < array_1.length) {
                result[i] = array_1[i1]
                i1++
                i++
            } else {
                result[i] = array_2[i2]
                i2++
                i++
            }
        }
    }
    return result
}

const mergeSort = (array, left, right) => {
    if (left > right) return array[left]
    if (left == right) return array[left]

    let k = (left + right) / 2

    let array_1 = mergeSort(array, left, k)
    let array_2 = mergeSort(array, k + 1, right)

    let result = merge(array_1, array_2)
    return result
}

const sortArray = (array) => {
    mergeSort(array, 0, array.length - 1)
}

console.log(sortArray([6, 5, 4, 3, 2, 1]))
console.log(merge([1, 2, 3]))
