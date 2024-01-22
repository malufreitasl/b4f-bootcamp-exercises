// classe que representa uma calculadora
// para números inteiros
//+ - * /

class Calculadora{
    constructor (){
        this.historico = []
        this.ultimoResultado = 0n
    }
    somar(a, b){
        let valor1 = a
        let valor2 = b
        if (!valor2){
            valor2  = a
            valor1 = this.ultimoResultado
        }
        this.ultimoResultado = BigInt(valor1) + BigInt(valor2)
        this.historico.push(`${valor1} + ${valor2} = ${this.ultimoResultado}`)
        return this; 
    }
    subtrair(a, b){
        let valor1 = a
        let valor2 = b
        if (!valor2){
            valor2  = a
            valor1 = this.ultimoResultado
        }
        this.ultimoResultado = BigInt(valor1) - BigInt(valor2)
        this.historico.push(`${valor1} - ${valor2} = ${this.ultimoResultado}`)
        return this; 
    }
    multiplicar(a, b){
        let valor1 = a
        let valor2 = b
        if (!valor2){
            valor2  = a
            valor1 = this.ultimoResultado
        }
        this.ultimoResultado = BigInt(valor1) * BigInt(valor2)
        this.historico.push(`${valor1} * ${valor2} = ${this.ultimoResultado}`)
        return this; 
    }
    dividir(a, b){
        let valor1 = a
        let valor2 = b
        if (!valor2){
            valor2  = a
            valor1 = this.ultimoResultado
        }
        this.ultimoResultado = BigInt(valor1) / BigInt(valor2)
        this.historico.push(`${valor1} / ${valor2} = ${this.ultimoResultado}`)
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