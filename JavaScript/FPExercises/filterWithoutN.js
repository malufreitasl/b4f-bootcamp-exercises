function arraySemN(n, array){
    return array.filter(number => number !== n)
}

console.log(arraySemN(1, [1, 2, 3, 4]))