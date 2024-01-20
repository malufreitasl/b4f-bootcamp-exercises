function reduceNumberArray(array){
    return array.reduce((ocorr, e) => {
        const FREQUENCIA_ANTERIOR = ocorr.has(e) ? ocorr.get(e) : 0
        return new Map([...ocorr, [e, FREQUENCIA_ANTERIOR + 1]])
    }, new Map([]))
}

console.log(reduceNumberArray([4, 2, 2, 2]))