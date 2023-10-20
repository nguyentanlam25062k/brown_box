const arrayStringsAreEqual = function (word1, word2) {
    let s1 = ''
    word1.forEach((elm) => (s1 += elm))
    let s2 = ''
    word2.forEach((elm) => (s2 += elm))
    return s1 === s2
    // return word1.join('') === word2.join('')
}

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']))
console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c']))
console.log(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg']))
