class Calculadora {
    constructor(){
        this.historico = [];
    }
    somar(a, b) {
        let valor1 = a;
        let valor2 = b;
        let resultadoOper = valor1 + valor2
        this.historico.push({"operacao": "soma", a: valor1, b: valor2, resultado: resultadoOper})
        return resultadoOper;
    }
    subtrair(a, b) {
        let valor1 = a;
        let valor2 = b;
        let resultadoOper = valor1 - valor2
        this.historico.push({"operacao": "subtração", a: valor1, b: valor2, resultado: resultadoOper})
        return resultadoOper;
    }
    multiplicar(a, b) {
        let valor1 = a;
        let valor2 = b;
        let resultadoOper = valor1 * valor2
        this.historico.push({"operacao": "multiplicação", a: valor1, b: valor2, resultado: resultadoOper})
        return resultadoOper;
    }
    dividir(a, b) {
        let valor1 = a;
        let valor2 = b;
        let resultadoOper = valor1 / valor2
        this.historico.push({operacao: "divisão", a: valor1, b: valor2, resultado: resultadoOper})
        return resultadoOper;
    }
    lerHistorico(operacao) {
        return this.historico.map(e => {if(e["operacao"] = operacao) return e });
    }
}

let calculadora = new Calculadora()
console.log(calculadora.somar(1, 2))
console.log(calculadora.lerHistorico("soma"))