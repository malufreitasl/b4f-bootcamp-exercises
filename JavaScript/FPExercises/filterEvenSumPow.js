function filterEven(array){
    return array.filter(e => e % 2 === 0).map(e => Math.pow(2)).reduce((acc, e) => acc + e)
}

console.log(filterEven([2, 2, 1]))