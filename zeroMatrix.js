 // ZERO MATRIX

 // This is problem 1.8 from Cracking the Coding Interview. The prompt: Write an algorithm such that if an element in an M x N matrix is zero, it's entire row and column are set to zero.

function zeroifyMatrix(matrix) {
    let zeroRows = {}
    let zeroCols = {}
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRows[i] = true
                zeroCols[j] = true
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (zeroRows[i] || zeroCols[j]) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}

console.log(zeroifyMatrix([[0]]))
console.log(zeroifyMatrix([[1]]))
console.log(zeroifyMatrix([[0, 1, 2], [3, 4, 5], [6, 7, 8]]))
console.log(zeroifyMatrix([[0, 1], [2, 3], [4, 5]]))
console.log(zeroifyMatrix([[10, 9, 8, 7], [6, 5, 4, 3], [2, 1, 0, -1]]))
