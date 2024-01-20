function atLeastOneEven(array){
    return array.some(e => e % 2 === 0);
}

const NUMBERS = [1, 2, 3, 9]
const NUMBERS2 = [10, 2, 8, 4]
console.log(atLeastOneEven(NUMBERS))
console.log(atLeastOneEven(NUMBERS2))