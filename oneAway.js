
// ONE AWAY

// One Away is problem 1.5 from Cracking the Coding Interview. The prompt is as follows: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// EXAMPLE
// pale, ple => true
// pales, pale => true
// pale, bale => true
// pale, bake => false

// This is a helper function to make a shallow copy of an object.
function shallowCopyObj(obj) {
    let newObj = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

// This is a helper function to make a hash table out of a string. (It makes the characters in the string the keys, and the values are the number of times given characters appear in the string.)
function hashString(str) {
    let strObj = {}
    for (let i = 0; i < str.length; i++) {
        if (strObj.hasOwnProperty(str[i])) {
            strObj[str[i]]++
        }
        else {
            strObj[str[i]] = 1
        }
    }
    return strObj
}

// This is a helper function to compare the lengths of two strings and figure out which one is longer.
function compareString(str1, str2) {
    if (str1.length <= str2.length) {
        return 1
    }
    return 0
}

// This is a helper function to determine if two strings are acceptably different, given one as a hash table.
function compareStringHash(strObj, str, count, difference) {
    for (let i = 0; i < str.length; i++) {
        if (strObj.hasOwnProperty(str[i])) {
            strObj[str[i]]--
            count--
            if (strObj[str[i]] < 0) {
                difference++
            }
        }
        else {
            difference++
        }
    }
    if (difference > 1 || count > 1 || count < -1) {
        return false
    }
    return true
}

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false
    }
    let baseStr, compStr
    if (compareString(str1, str2)) {
        baseStr = str1
        compStr = str2
    }
    else {
        baseStr = str2
        compStr = str1
    }
    let baseStrObj = hashString(baseStr)
    let baseStrObjCopy = shallowCopyObj(baseStrObj)
    let count = baseStr.length
    let difference = 0
    return compareStringHash(baseStrObjCopy, compStr, count, difference)
}

console.log(oneAway('pale', 'ple')) // true
console.log(oneAway('pales', 'pale')) // true
console.log(oneAway('pale', 'bale')) // true
console.log(oneAway('pale', 'bake')) // false
console.log(oneAway(' pale', 'pal e')) // true
console.log(oneAway('pale', 'paale')) // true
console.log(oneAway('pale', 'paaale')) // false
