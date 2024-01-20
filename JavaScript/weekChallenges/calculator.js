// classe que representa uma calculadora
// para números inteiros
//+ - * /

class Calculadora{
    constructor (){
        this.historico = []
        this.ultimoResultado = 0
    }
    somar(a, b){
        if (!b ){
            b = a
            a = this.ultimoResultado
        }
        console.log(a,b )
        this.ultimoResultado = a + b
        this.historico.push(`${a} + ${b} = ${this.ultimoResultado}`)
        console.log(typeof this.historico[0])
        return this; 
    }
    subtrair(a, b){
        if (b === undefined){
            b = a
            a = this.ultimoResultado
        }
        this.ultimoResultado = a - b
        this.historico.push(`${a} - ${b} = ${this.ultimoResultado}`)
        return this;
    }
    multiplicar(a, b){
        if (b === undefined){
            b = a
            a = this.ultimoResultado
        }
        this.ultimoResultado = a * b
        this.historico.push(`${a} * ${b} = ${this.ultimoResultado}`)
        return this;
    }
    dividir(a, b){
        if (b === undefined){
            b = a
            a = this.ultimoResultado
        }
        this.ultimoResultado = a / b
        this.historico.push(`${a} / ${b} = ${this.ultimoResultado}`)
        return this;
    }

    limparHistorico(){
        this.historico = []
        this.ultimoResultado = 0
        return this
    }

    obterResultado(){
        return BigInt(this.ultimoResultado)
    }
    toJSON(){
        return {"historico" : this.historico, "ultimoResultado" : String(this.ultimoResultado)}
    }
    toString(){
        if (this.historico.length == 0){
            return "Calculadora limpa"
        }

        return `=== Histórico da Calculadora ===
${this.historico.map((e, i) => i + 1 + ". " + e).join("\n")}
=== Fim do Histórico ===
Foram realizadas ${this.historico.length} operações        
Último resultado: ${this.ultimoResultado}`        
}

}
let calc = new Calculadora()
calc.somar(1,2)
calc.subtrair(1,1)
console.log(calc.toString())