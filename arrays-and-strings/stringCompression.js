
// STRING COMPRESSION

// String Compression is problem 1.6 from Cracking the Coding Interview. The prompt is as follows: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume your string has only uppercase and lowercase letters (a-z).

function stringCompressionBasic(str) {
    let length = str.length
    let compressedString = ''
    for (let i = 0; i < length; i++) {
        compressedString += str[i]
        let count = 1
        while (str[i + 1] && str[i + 1] === str[i]) {
            count++
            i++
        }
        compressedString += count
    }
    return (compressedString.length < length ? compressedString : str)
}

// console.log(stringCompressionBasic('')) // ''
// console.log(stringCompressionBasic('a')) // 'a'
// console.log(stringCompressionBasic('ab')) // 'ab'
// console.log(stringCompressionBasic('aabb')) // 'aabb'
// console.log(stringCompressionBasic('aaa')) // 'a3'
// console.log(stringCompressionBasic('abaaaaa')) // 'a1b1a5'
// console.log(stringCompressionBasic('aabcccccaaa')) // 'a2b1c5a3'

// The above solution is not very efficient, because string concatenation is not a constant operation. It costs the length of the component strings each time it occurs. So let's break the string into an array, which we can add to in constant time, do the bulk of the work, then convert the array back to a string.

// This is a helper function for converting a string into an array.

function convertStringToArr(str) {
    let resultArr = []
    for (let i = 0; i < str.length; i++) {
        resultArr.push(str[i])
    }
    return resultArr
}

// This is a helper function for converting an array back into a string.

function convertArrayToStr(arr) {
    let resultStr = ''
    for (let i = 0; i < arr.length; i++) {
        resultStr += arr[i]
    }
    return resultStr
}

function stringCompression(str) {
    let stringArr = convertStringToArr(str)
    let compressedArr = []
    let count = 1
    for (let i = 0; i < stringArr.length; i++) {
        compressedArr.push(stringArr[i])
        while (stringArr[i + 1] && stringArr[i] === stringArr[i + 1]) {
            count++
            i++
        }
        compressedArr.push(count.toString())
        count = 1
    }
    if (stringArr.length <= compressedArr.length) {return str}
    return convertArrayToStr(compressedArr)
}

console.log(stringCompression('')) // ''
console.log(stringCompression('a')) // 'a'
console.log(stringCompression('ab')) // 'ab'
console.log(stringCompression('aabb')) // 'aabb'
console.log(stringCompression('aaa')) // 'a3'
console.log(stringCompression('abaaaaa')) // 'a1b1a5'
console.log(stringCompression('aabcccccaaa')) // 'a2b1c5a3'
