function allEven(array){
    return array.every(e => e % 2 === 0);
}

const NUMBERS = [1, 2, 3, 4]
const NUMBERS2 = [10, 2, 8, 4]
console.log(allEven(NUMBERS))
console.log(allEven(NUMBERS2))