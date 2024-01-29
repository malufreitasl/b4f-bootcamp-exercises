class Pessoa {
    // Escreve aqui o teu código
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    comparaIdade(pessoa){
        if(pessoa.idade > this.idade){
            return `${this.getArticle(pessoa)} ${pessoa.nome} é mais velh${this.getArticle(pessoa)} do que eu.`
        } else if(pessoa.idade < this.idade) {
            return `${this.getArticle(pessoa)} ${pessoa.nome} é mais nov${this.getArticle(pessoa)} do que eu.`
        } else {
            return `${this.getArticle(pessoa)} ${pessoa.nome} é da mesma idade que eu.`
        }
    }
    getArticle(pessoa){
        pessoa.sexo === "f"? "a" : "o"
    }
}

const pessoa1 = new Pessoa("Elizabeth", 50, "f")
const pessoa2 = new Pessoa("Jasmin", 20, "m")
const pessoa3 = new Pessoa("João", 10, "m")

console.log(pessoa1.comparaIdade(pessoa2))