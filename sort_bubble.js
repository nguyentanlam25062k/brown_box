let array = [6, 5, 4, 3, 2, 1]
let array_2 = [1, 2, 3, 6, 5, 4]

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let isSorted = true
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                isSorted = false
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
        // console.log(array)
        if (isSorted) break
    }
    return array
}

// console.log(bubbleSort(array_2))
