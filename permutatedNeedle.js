
// PERMUTATED NEEDLE IN A HAYSTACK

// The function below checks for all permutations of the needle of the needle's length that are in the haystack.

// SORTING APPROACH
// First, make a sorted version of the needle.
// Then, sort each substring in the haystack of the needle's length and compare it to the needle.
// If yes, add the index of the first character to the memo.
// If no, increment the count.


// The function below is a helper function that sorts strings.
function helperSort(str) {
    if (str.length < 2) {
        return str
    }
    let pivot = str[0]
    let front = ''
    let back = ''
    for (let i = 1; i < str.length; i++) {
        if (str[i] > pivot) {
            back += str[i]
        }
        else {
            front += str[i]
        }
    }
    return helperSort(front) + pivot + helperSort(back)
}

// This function solves the initial problem by sorting the needle, sorting each substring in the haystack, and comparing them.
function permutatedNeedle(needle, haystack) {
    if (needle.length === 0) return []
    let sortedNeedle = helperSort(needle)
    let result = []
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let currentSub = haystack.slice(i, i + needle.length)
        let sortedCurrentSub = helperSort(currentSub)
        if (sortedCurrentSub === sortedNeedle) {
            result.push(i)
        }
    }
    return result
}

// console.log(permutatedNeedle('cab', 'abcjubckbcab')) // Test case with overlapping strings, and where last substring is a find
// console.log(permutatedNeedle('cab', '')) // Test case where haystack is empty
// console.log(permutatedNeedle('', 'abcjubckbcab')) // Test case where needle is empty
// console.log(permutatedNeedle('cab', 'grnuibgriuhynvjfdi')) // Test case where needle cannot be found
// console.log(permutatedNeedle('k', 'abcjubckbcab')) // Test case where needle is one character
// console.log(permutatedNeedle('cab', 'ab')) // Test case where needle is longer than haystack

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

// This is a helper function for making a hash table relating the characters in a string to the number of times they appear.
function hashTableString(str) {
    let hashTable = {}
    for (let i = 0; i < str.length; i++) {
        if (!hashTable[str[i]]) {
            hashTable[str[i]] = 1
        }
        else {
            hashTable[str[i]]++
        }
    }
    return hashTable
}

// This is a faster function for identifying the locations of permutations of the needle (of the needle's length) in the haystack. It makes a hash table for the number of times each character appears in the needle, then uses that hash table to keep track of whether each substring in the haystack is a permutation of the needle.
function fastPermutatedNeedle(needle, haystack) {
    let result = []
    let length = needle.length
    let needleObject = hashTableString(needle)
    for (let i = 0; i < haystack.length - length + 1; i++) {
        if (!needleObject[haystack[i]]) {
            continue
        }
        let needleObjectCopy = shallowCopyObject(needleObject)
        let count = length
        for (let j = i; j < i + needle.length; j++) {
            if (!needleObjectCopy[haystack[j]] || needleObjectCopy[haystack[j] < 1]) {
                break
            }
            needleObjectCopy[haystack[j]]--
            count--
        }
        if (count === 0) {
            result.push(i)
        }
    }
    return result
}

console.log(fastPermutatedNeedle('auha', 'aauhibuhhaua'))
console.log(fastPermutatedNeedle('auha', 'fahuaffff'))

console.log(fastPermutatedNeedle('cab', 'abcjubckbcab')) // Test case with overlapping strings, and where last substring is a find
console.log(fastPermutatedNeedle('cab', '')) // Test case where haystack is empty
console.log(fastPermutatedNeedle('', 'abcjubckbcab')) // Test case where needle is empty
console.log(fastPermutatedNeedle('cab', 'grnuibgriuhynvjfdi')) // Test case where needle cannot be found
console.log(fastPermutatedNeedle('k', 'abcjubckbcab')) // Test case where needle is one character
console.log(fastPermutatedNeedle('cab', 'ab')) // Test case where needle is longer than haystack
