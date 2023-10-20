const totalDigits = (numb) => {
    let count = 0
    let result = numb
    while (result !== 0) {
        result = Math.floor(numb / 10)
        numb = result
        count++
    }
    return count
}

const findNumbers = function (nums) {
    let count = 0
    nums.forEach((num) => {
        if (totalDigits(num) % 2 === 0) count++
    })
    return count
}

// console.log(findNumbers([1, 12, 123, 1234]))
