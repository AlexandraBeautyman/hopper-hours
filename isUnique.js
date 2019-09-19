
// IS UNIQUE

// Is Unique is a string manipulation question (1.1) from Cracking the Coding Interview. The prompt is to implement an algorithm to determine is a string has all unique characters. What if you cannot use additional data structures?

// This function solves the prompt without accounting for the caveat about data structures. It is O(n), where n is the length of the string, if you assume an infinite character set. Otherwise, you can say it increases linearly with the lesser or n or c, where c is the length of the character set.

function isUniqueBasic(str) {
    let charObj = {}
    for (let i = 0; i < str.length; i++) {
        if (charObj.hasOwnProperty(str[i])) {
            return false
        }
        charObj[str[i]] = true
    }
    return true
}

// console.log(isUniqueBasic('a')) // returns true
// console.log(isUniqueBasic('ab')) // returns true
// console.log(isUniqueBasic('abc')) // returns true
// console.log(isUniqueBasic('abca')) // returns false
// console.log(isUniqueBasic('')) // returns true


// This function solves the prompt while accounting for the caveat that we cannot use additional data structures.

function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isUnique('')) // returns true
console.log(isUnique('a')) // returns true
console.log(isUnique('ab')) // returns true
console.log(isUnique('abc')) // returns true
console.log(isUnique('abca')) // returns false
