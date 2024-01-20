function captalizaVogais(matrix){
    let newMatrix = []
    for (let row = 0; row < matrix.length; row++){
        let newRow = []

        for (let col = 0; col < matrix[row].length; col++){
            if (["a", "e", "i", "o", "u"].matrix[row][col]){
                newRow.push(matrix[row][col].toUpperCase())
            }    
            else{
                newRow.push(matrix[row][col])
            }
        }
        newMatrix.push(newRow)
    }
    return newMatrix;
}

const matriz = [
    ['a', 'x', 'e', 'p', 'o'],
    ['b', 'q', 'z', 'b', 's'],
    ['r', 't', 'h', 'r', 't'],
    ['n', 'l', 'v', 'l', 'v']
]

console.log(captalizaVogais(matriz))