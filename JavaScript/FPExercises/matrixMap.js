function captalizaVogais(matrix){
    return matrix.map(row => row.map(e => ["a", "e", "i", "o", "u"].includes(e)? e.toUpperCase() : e))
}

const matriz = [
    ['a', 'x', 'e', 'p', 'o'],
    ['b', 'q', 'z', 'b', 's'],
    ['r', 't', 'h', 'r', 't'],
    ['n', 'l', 'v', 'l', 'v']
]

console.log(captalizaVogais(matriz))