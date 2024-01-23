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

 function calculaModa(array) {
    let frequenciaDosValores = {};
  
    for (let i = 0; i < array.length; i++) {
      let valor = array[i];
  
      if (frequenciaDosValores[valor] === undefined) {
        frequenciaDosValores[valor] = 1;
      } else {
        frequenciaDosValores[valor]++;
      }
    }

    let maxFrequencia = 0;
    let moda = [];
    let chaves = Object.keys(frequenciaDosValores);
  
    for (let i = 0; i < chaves.length; i++) {
      let chave = chaves[i];
      if (frequenciaDosValores[chave] > maxFrequencia) {
        maxFrequencia = frequenciaDosValores[chave];
        moda = [chave];
      }
    }
  
    return Number(moda);
}

console.log(calculaModa([4,4,1,2,2,3]))