let array = [6, 5, 4, 3, 2, 1]
let array_2 = [1, 2, 3, 6, 5, 4]

const insertionSort = (a) => {
    let n = a.length
    for (let i = 1; i < n; i++) {
        // insert a[i] into 0 -> a[i-1]
        let ai = a[i]
        let j = i - 1
        while (j >= 0 && ai < a[j]) {
            a[j + 1] = a[j]
            j--
        }
        a[j + 1] = ai
        // console.log(a)
    }
    return a
}

// console.log(insertionSort(array))
