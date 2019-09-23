
// PALINDROME PERMUTATION

// This is problem 1.4 from Cracking the Coding Interview. The prompt is as follows: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. A palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.
// EXAMPLE
// Input: 'Tact Coa'
// Output: true

function palindromePermutation(str) {
    let charObj = {}
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i) || str[i].match(/[A-Z]/i)) {
            let currentChar = str[i].toLowerCase()
            if (charObj.hasOwnProperty(currentChar)) {
                charObj[currentChar]++
            }
            else {
                charObj[currentChar] = 1
            }
            if (charObj[currentChar] % 2 === 0) {
                count--
            }
            else {
                count++
            }
        }
    }
    if (count > 1) {
        return false
    }
    return true
}

console.log(palindromePermutation(''))
console.log(palindromePermutation('a'))
console.log(palindromePermutation('ab C'))
console.log(palindromePermutation('aBcbc $*'))
console.log(palindromePermutation('  aB^cbc $*'))
console.log(palindromePermutation('Tact Coa'))

