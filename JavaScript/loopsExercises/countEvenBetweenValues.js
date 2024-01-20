
function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função
    let contator = 0;

    if (valor1 === valor2) {
        return "Por favor introduza dois valores diferentes."
    }
    else if (valor1 < valor2){
        for (let i = valor1; i <= valor2; i++){
            if (i % 2 === 0){
                contator++;
            }
        }
    }
    else{
        for (let i = valor2; i <= valor1; i++){
            if (i % 2 === 0){
                contator++;
            }
        }
    }
    return contator;
}