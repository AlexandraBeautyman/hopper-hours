
// SUMS TO TARGET

//This code solves two related algorithms. In the first, we determine whether any combination of numbers in an array of numbers sums to the given target. This returns a boolean value.
// In the second, we return an array of arrays, in which each inner array includes a collection of numbers from the source array that together sum to the target. It is resilient to negative inputs.

// first
function booleanSumsToTarget(arr, target) {
    if (target === 0) {
        return true
    }
    else if (arr.length < 1) {
        return false
    }
    let includes = booleanSumsToTarget(arr.slice(1), target - arr[0])
    let excludes = booleanSumsToTarget(arr.slice(1), target)
    return includes || excludes
}

console.log(booleanSumsToTarget([1, 2, 3, 4, 5], 5)) // returns true
console.log(booleanSumsToTarget([1, 2, 3, 4, 5], 111)) // returns false

// second
function sumsToTarget(sourceArr, target, resultsArr = [], tempArr = []) {
    if (target === 0) {
        resultsArr.push(tempArr)
        tempArr = []
    }
    else if (sourceArr.length > 0) {
        sumsToTarget(sourceArr.slice(1), target - sourceArr[0], resultsArr, tempArr.concat([sourceArr[0]]))
        sumsToTarget(sourceArr.slice(1), target, resultsArr, tempArr)
    }
    return resultsArr
}

console.log(sumsToTarget([1, 2, 4, 7, 90, 6, 5, 11], 11)) // basic test case
console.log(sumsToTarget([1, 2, 4, -7, 90, 6, 5, 11], -2)) // including negative numbers case
console.log(sumsToTarget([1, 2, 4, -7, 90, 6, 5, 11], 38)) // no sums case
