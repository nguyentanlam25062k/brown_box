const firstUniqChar = function (string) {
    let array = Array.from(string)
    let count = new Array(123)
    for (let i = 0; i < count.length; i++) {
        count[i] = 0
    }

    for (let i = 0; i < array.length; i++) {
        let index = array[i].charCodeAt(0)
        count[index]++
    }

    for (let i = 0; i < array.length; i++) {
        let index = array[i].charCodeAt(0)
        if (count[index] === 1) {
            return i
        }
    }

    return -1
}

// console.log(firstUniqChar('leetcode'))
// console.log(firstUniqChar('loveleetcode'))
// console.log(firstUniqChar('aabb'))
