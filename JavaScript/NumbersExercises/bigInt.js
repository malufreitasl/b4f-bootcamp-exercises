function arrayFromBigInt(intNum){
    return String(intNum).split('')
}
console.log(arrayFromBigInt(123n))