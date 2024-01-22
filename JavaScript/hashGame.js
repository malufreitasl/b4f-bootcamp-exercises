let jogo = {
    tabuleiro: [
        ["x"," ",""],
        [" ","x"," "],
        [" "," ","x"],
    ]
}

function adicionarJogada(jogo, jogador, linha, coluna){
    const novoJogo = JSON.parse(JSON.stringify(jogo))
    if (possiveisJogadas[linha][coluna] == " "){
            novoJogo.tabuleiro[linha][coluna] = jogador;
    }
    return novoJogo
}

function obterJogadasPossiveis(jogo){
    let jogadasPossiveis = []
    for(let linha = 0; linha < jogo.tabuleiro.length; linha++){
        for (let coluna = 0; coluna < jogo.tabuleiro.length; coluna++){
            if (jogo.tabuleiro[linha][coluna] === " "){
                jogadasPossiveis.push({ "linha" : linha, "coluna" : coluna})
            }
        }
    }
    return jogadasPossiveis
}

function obtemCombinacoes(tabuleiro){
    return obtemLinhas(tabuleiro).concat(obtemColunas(tabuleiro)).concat(obtemDiagonais(tabuleiro))
}

function obtemLinhas(tabuleiro){
    let resultado = [];
    for (let linha = 0; linha < tabuleiro.length; linha++){
        resultado.push(tabuleiro[linha].join[""]);
    }
    return resultado;
}

function obtemColunas(tabuleiro){
    let resultado = [];
    for (let coluna = 0; coluna < tabuleiro.length; coluna++){
        let colunaEmString = 0
        for (let linha = 0; linha < tabuleiro.length; linha++){
            colunaEmString += tabuleiro[linha][coluna]
        }
        resultado.push(colunaEmString);
    }
    return resultado;
}

function obtemDiagonais(tabuleiro){
    let resultado = []
    for (let linha = 0; linha < tabuleiro.length; linha++){
        resultado[0] += tabuleiro[linha][linha];
        resultado[1] += tabuleiro[linha][tabuleiro.length - linha - 1]
    }
    return resultado;
}

function verificarVencedor(jogo){
    let combinacoes = obtemCombinacoes(jogo.tabuleiro)
    if (combinacoes.includes("XXX")){
        return "X"
    }
    else if(combinacoes.includes("OOO")){
        return "O"
    }
    return undefined
}


function FimDoJogo(jogo){
    return obterJogadasPossiveis(jogo).length === 0 || verificarVencedor() !== undefined;
}



