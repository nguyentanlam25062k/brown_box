const maximumWealth = function (accounts) {
    let row = accounts.length
    let col = accounts[0].length
    let max = 0
    for (let i = 0; i < row; i++) {
        let total = 0
        for (let j = 0; j < col; j++) {
            total += accounts[i][j]
        }
        if (total > max) max = total
    }
    return max
}

// console.log(
//     maximumWealth([
//         [2, 8, 7],
//         [7, 1, 3],
//         [1, 9, 5]
//     ])
// )
