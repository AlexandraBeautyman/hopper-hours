
// CHECK PERMUTATION

// Check Permutation is a question (1.2) from Cracking the Coding Interview. The prompt is as follows: Given two strings, write a method to decide if one is a permutation of the other.

// This is a helper function for shallow copying an object.
function shallowCopyObject(obj) {
    let result = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key]
        }
    }
    return result
}

// This is the main function. It operates in O(n + m) time, where n is the length of the first string and m is the length of the second.
function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let strObj = {}
    for (let i = 0; i < str1.length; i++) {
        if (strObj.hasOwnProperty(str1[i])) {
            strObj[str1[i]]++
        }
        else {
            strObj[str1[i]] = 1
        }
    }
    let strObjCopy = shallowCopyObject(strObj)
    for (let i = 0; i < str2.length; i++) {
        if (!strObjCopy.hasOwnProperty([str2[i]]) || strObjCopy[str2[i]] < 0) {
            return false
        }
        strObjCopy[str2[i]]--
    }
    return true
}

console.log(isPermutation('abc', 'def')) // returns false
console.log(isPermutation('abc', 'bca')) // returns true
console.log(isPermutation('d', 'd')) // returns true
console.log(isPermutation('', '')) // returns true
console.log(isPermutation('a', '')) // returns false
