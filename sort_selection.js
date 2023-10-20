let array = [6, 5, 4, 3, 2, 1]
let array_2 = [1, 2, 3, 6, 5, 4]

const selectionSort = (a) => {
    let n = a.length
    for (let i = 0; i < n; i++) {
        minIndex = i
        for (let j = i + 1; j < n; j++) {
            // Find min[i, n]
            if (a[j] < a[minIndex]) minIndex = j
            if (minIndex !== i) {
                let t = a[i]
                a[i] = a[minIndex]
                a[minIndex] = t
            }
        }
        console.log(a)
    }
    return a
}

// console.log(selectionSort(array))
