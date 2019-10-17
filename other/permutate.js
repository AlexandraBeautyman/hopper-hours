
// PERMUTATE

// The function below prints all permutations of a given string with the same length.

function permutate(str, length = str.length, permutation = '') {
    if (permutation.length === length) {
        console.log(permutation)
    }
    else {
        for (let i = 0; i < str.length; i++) {
            let newStr = str.slice(0, i) + str.slice(i + 1)
            let newPermutation = permutation + str[i]
            permutate(newStr, length, newPermutation)
        }
    }
}

// TEST CASES
// permutate('abcd') // basic case
// permutate('') // empty string case
// permutate('c') // one-character long string case
// permutate('cz') // two-character long string case

// The function below returns an array of permutations of a string of the same length.

function returnPermuted(str, result = [], length = str.length, permutation = '') {
    if (permutation.length === length) {
        result.push(permutation)
        return result
    }
    else {
        for (let i = 0; i < str.length; i++) {
            let newStr = str.slice(0, i) + str.slice(i + 1)
            let newPermutation = permutation + str[i]
            result = returnPermuted(newStr, result, length, newPermutation)
        }
        return result
    }
}

// TEST CASES
// console.log(returnPermuted('abcd')) // basic case
// console.log(returnPermuted('')) // empty string case
