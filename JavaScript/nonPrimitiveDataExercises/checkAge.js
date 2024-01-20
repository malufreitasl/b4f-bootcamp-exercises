const pessoa = {
    nome: "Daniel",
    idade: 19
}

function verificarIdade(pessoa){
    pessoa.maiorDeIdade = pessoa.idade >= 18
    return pessoa
}

console.log(verificarIdade(pessoa))