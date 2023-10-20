let binarySearch = (array, value) => {
    let n = array.length
    let iLeft = 0
    let iRight = n - 1

    while (iLeft <= iRight) {
        let iMid = Math.floor((iLeft + iRight) / 2)
        console.log(`[${iLeft}, ${iRight}] value = ${iMid}`)

        if (value == array[iMid]) {
            return iMid
        } else if (value > array[iMid]) {
            iLeft = iMid + 1
        } else {
            iRight = iMid - 1
        }
    }

    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))
