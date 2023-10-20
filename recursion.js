const sum = (n) => {
    if (n == 1) return 1
    return n + sum(n - 1)
}

const factorial = (n) => {
    if (n == 1) return 1
    return n * factorial(n - 1)
}

const pow = (a, n) => {
    if (n == 1) return a
    return a * pow(a, n - 1)
}

const minOfArray = (array, n) => {
    if (n == 0) return -1
    if (n == 1) {
        return array[0]
    }
    if (array[n - 1] < minOfArray(array, n - 1)) {
        return array[n - 1]
    }
    return minOfArray(array, n - 1)
}

const printArray = (array, index) => {
    if (index < 0 || index >= array.length) return
    printArray(array, index + 1)
    console.log(array[index])
}

console.log(printArray([1, 2, 3, 4, 5], 0))
