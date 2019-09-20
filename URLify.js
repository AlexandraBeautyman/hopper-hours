
// URLify

// URLify is problem 1.3 from Cracking the Coding Interview. The prompt is as follows: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

// EXAMPLE

// Input: 'Mr John Smith    ', 13
// Output: 'Mr%20John%20Smith'

// This is a first pass implementation.
function basicURLify(str, length) {
    let resultString = ''
    for (let i = 0; i < length; i++) {
        if (str[i] === ' ') {
            resultString += '%20'
        }
        else {
            resultString += str[i]
        }
    }
    return resultString
}

// console.log(basicURLify('Mr John Smith    ', 13)) // basic example
// console.log(basicURLify(' Mr John Smith      ', 14)) // space at beginning
// console.log(basicURLify('Mr  John Smith      ', 14)) // extra space
// console.log(basicURLify('', 0)) // empty string
// console.log(basicURLify('   ', 1)) // string is one space

// Note: In Javascript, you can't perform this work in place, because strings are immutable. However, we can create a character array and perform the operation in place.
function inPlaceURLify(charArr, length) {
    let start = length - 1
    let end = charArr.length - 1
    for (let i = start; i > -1; i--) {
        if (charArr[i] !== ' ') {
            charArr[end] = charArr[i]
            end--
        }
        else {
            charArr[end - 2] = '%'
            charArr[end - 1] = '2'
            charArr[end] = '0'
            end = end - 3
        }
    }
    return charArr
}

console.log(inPlaceURLify(['M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', ' ', ' ', ' ', ' '], 13)) // basic example
console.log(inPlaceURLify([' ', 'M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', ' ', ' ', ' ', ' ', ' ', ' '], 14)) // space at beginning
console.log(inPlaceURLify(['M', 'r', ' ', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', ' ', ' ', ' ', ' ', ' ', ' '], 14)) // extra space
console.log(inPlaceURLify([''], 0)) // empty string
console.log(inPlaceURLify([' ', ' ', ' '], 1)) // string is one space
