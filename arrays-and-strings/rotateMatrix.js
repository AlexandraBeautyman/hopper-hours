
// ROTATE MATRIX

// Rotate Matrix is problem 1.7 from Cracking the Coding Interview. The prompt: Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

// This function accomplishes the prompt, but not in place.

function rotateMatrix(matrix) {
    let rotatedMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        let newRow = []
        for (let j = matrix.length - 1; j > -1; j--) {
            newRow.push(matrix[j][i])
        }
        rotatedMatrix.push(newRow)
    }
    return rotatedMatrix
}

//console.log(rotateMatrix([[0, 1, 2], [3, 4, 5], [6, 7, 8]]))

// This function performs in place.

function rotateMatrixInPlace(matrix) {
    let endPointer = matrix.length - 1
    for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
        for (let j = i; j < endPointer; j++) {
            let [newRowSpot, newColumnSpot] = [j, matrix.length - i - 1]
            let tempVal = matrix[newRowSpot][newColumnSpot]
            matrix[newRowSpot][newColumnSpot] = matrix[i][j]
            while (newRowSpot !== i || newColumnSpot !== j) {
                [newRowSpot, newColumnSpot] = [newColumnSpot, matrix.length - newRowSpot - 1]
                let newTemp = matrix[newRowSpot][newColumnSpot]
                matrix[newRowSpot][newColumnSpot] = tempVal
                tempVal = newTemp
            }
        }
        endPointer--
    }
    return matrix
}

console.log(rotateMatrixInPlace([[0, 1, 2], [3, 4, 5], [6, 7, 8]]))
console.log(rotateMatrixInPlace([[0]]))
console.log(rotateMatrixInPlace([[0, 1], [2, 3]]))
console.log(rotateMatrixInPlace([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]))
