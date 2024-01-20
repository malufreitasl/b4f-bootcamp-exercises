function calculaModa(array){
    let elementsIterance = new Map()  
    for (let value of array){
        elementsIterance.get(value) === undefined? elementsIterance.set(value, 1) : elementsIterance.set(value, elementsIterance.get(value) +1)
    }
    for (const [key, value] of elementsIterance.entries()) {
        if (value === Math.max(...elementsIterance.values()))
            return key;
    }
}

console.log(calculaModa([4,4,1,2,2,3]))