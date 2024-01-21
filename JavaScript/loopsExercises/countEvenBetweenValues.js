function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função
    if (valor1 === valor2) {
        return "Por favor introduza dois valores diferentes."
    }
    const maxValue = Math.max(valor1, valor2);
    const minValue = Math.min(valor1, valor2);
    let evenCounter = 0;
    for (let i = minValue; i <= maxValue; i++){
        if (i % 2 === 0){
            evenCounter++;
        }
    }
    return evenCounter;
}