class Inteiro {
    // completa a classe
    #value
    constructor(value){
        this.#value = isNaN(value) ? 0 : Math.floor(value);
    }
    get valor(){
        return this.#value
    }
    set valor(value){
        this.#value = isNaN(value) ? this.#value : Math.floor(value);
    }
}

let inteiro = new Inteiro(1.2);
console.log(inteiro.getValue() == 0)
console.log(inteiro.getValue())