
// STRING ROTATION

// String Rotation is problem 1.9 from Cracking the Coding Interview. The prompt is as follows: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. 'waterbottle' is a rotation of 'erbottlewat'.)

// TO DO: Come up with an implementation of the Rabin-Karp Substring Search method, then use it on s1s1 and s2.

// Below are first attempts.

// This is a helper function isSubstring.
function isSubstring(string, substring) {
    if (substring.length > string.length) { return false }
    if (substring === '') { return true }
    for (let i = 0; i < string.length; i++) {
            if (substring[0] === string[i]) {
                for (let j = 0; j < substring.length; j++) {
                    if (substring[j] !== string[i + j]) {
                        break
                    }
                    else if (j === substring.length - 1) {
                        return true
                    }
                }
            }
        }
    return false
}

// console.log(isSubstring('abc', 'bc')) // true
// console.log(isSubstring('abc', 'abc')) // true
// console.log(isSubstring('abc', 'cd')) // false
// console.log(isSubstring('', '')) // false
// console.log(isSubstring('', 'bc')) // false
// console.log(isSubstring('aaaa', 'a')) // true
// console.log(isSubstring('a', '')) // true


// This is a helper function that calls isSubstring under the right conditions.

function isRotationHelper(s1, s2, startingIndex) {
    for (let j = 0; j + startingIndex < s1.length; j++) {
        if (s1[j + startingIndex] !== s2[j]) {
            break
        }
        if (j + startingIndex === s1.length - 1) {
            let substring = s1.slice(0, startingIndex)
            return (startingIndex === 0 || isSubstring(s2, substring))
        }
    }
    return false
}

function isRotation(s1, s2) {
    if (s1.length !== s2.length) { return false }
    let beginning = s2[0]
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === beginning) {
            if (isRotationHelper(s1, s2, i)) { return true }
        }
    }
    return (!s2.length)
}

// console.log(isRotation('aaaae', 'aaaaa')) // false
// console.log(isRotation('aaabcd', 'abcdaa')) // true
// console.log(isRotation('waterbottle', 'erbottlewat')) // true
// console.log(isRotation('waterbottle', 'ebbottlewat')) // false
// console.log(isRotation('waterbottle', 'erbotttewat')) // false
// console.log(isRotation('waterbottle', 'bottlewater')) // true
// console.log(isRotation('', '')) // true
// console.log(isRotation('w', 'w')) // true


// This is a version that doesn't call isSubstring at all.

function isRotationSimple(s1, s2) {
    if (s1.length !== s2.length) return false
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            for (let j = 0; j < s1.length; j++) {
                let index1 = i + j
                let index2 = j
                if (index1 >= s1.length) {
                    index1 = index1 - s1.length
                }
                if (s1[index1] !== s2[index2]) {
                    break
                }
                if (j === s1.length - 1) {
                    return true
                }
            }
        }
    }
    return !s2.length
}

console.log(isRotationSimple('aaabcd', 'abcdaa')) // true
console.log(isRotationSimple('waterbottle', 'erbottlewat')) // true
console.log(isRotationSimple('waterbottle', 'ebbottlewat')) // false
console.log(isRotationSimple('waterbottle', 'erbotttewat')) // false
console.log(isRotationSimple('waterbottle', 'bottlewater')) // true
console.log(isRotationSimple('', '')) // true
console.log(isRotationSimple('w', 'w')) // true
