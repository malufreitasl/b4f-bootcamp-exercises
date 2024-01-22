function perimetroDoQuadrado(lado) {
    // escreve aqui a função
    return lado*4
}

function areaDoQuadrado(lado) {
    // escreve aqui a função
    return lado**2
}

function volumeDoCubo(lado) {
    // escreve aqui a função
    return lado**3
}

function superficieDoCubo(lado){
    // escreve aqui a função
    return 6 * lado**2;
}

function perimetroDoRectangulo(comprimento, largura) {
    // escreve aqui a função
    return comprimento*2 + largura*2
}

function areaDoRectangulo(comprimento, largura) {
    // escreve aqui a função 
    return comprimento * largura
}

function volumeDoParalelepipedo(comprimento, largura, altura) {
    // escreve aqui a função
    return comprimento * largura * altura
}

function superficieDoParalelepipedoQuadrado(ladodabase, comprimento){
    // escreve aqui a função
    return 2 * ((ladodabase**2) + (comprimento * ladodabase * 2));
}

function perimetroDoCirculo(raio) {
    // escreve aqui a função
    return 2 * Math.PI * raio
}

function areaDoCirculo(raio) {
    // escreve aqui a função
    return Math.PI*raio**2
}

function superficieDaEsfera(raio){
    // escreve aqui a função
    return 4 * Math.PI * raio**2;
}

function volumeDoCilindro(raio, altura) {
    // escreve aqui a função
    return Math.PI * raio**2 * altura
}

function volumeDoCone(raio, altura) {
    // escreve aqui a função
    return (Math.PI * raio**2 *altura)/3
}

function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
    let meioComprimento = (comprimentoMaior - comprimentoMenor)/2
    let comprimentoMedio = Math.sqrt(meioComprimento**2 + altura**2)
    return comprimentoMaior + comprimentoMenor + 2*comprimentoMedio
}

function areaDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
    return (comprimentoMaior + comprimentoMenor) * altura/2
}

function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    // escreve aqui a função
    let ladoMaior = diagonalMaior/2;
    let ladoMenor = diagonalMenor/2;
    let ladoHipotenusa = Math.sqrt(ladoMaior**2 + ladoMenor**2)
    return ladoHipotenusa * 4
}

function areaDoLosango(diagonalMaior, diagonalMenor) {
    // escreve aqui a função
    return (diagonalMaior * diagonalMenor)/2
}

function perimetroDoHexagono(lado) {
    // escreve aqui a função
    return lado * 6;
}

function areaDoHexagono(lado) {
    // escreve aqui a função
    return Math.floor(3 * (lado**2) * Math.sqrt(3)/2);
}

function umElevadoAoOutro(um, outro) {
    // escreve aqui a função
    return BigInt(um)**BigInt(outro);
}

function numeroAoQuadrado(num) {
    return num * num;
}

function aleatorioEntre(min, max) {
    let nAleatorio = Math.floor((Math.random() * (max - min + 1)) + min);
    return nAleatorio;
}

const ALTURA_TRIANGULO = 10;
let areaDoTriangulo;

function calculaAreaDoTriangulo(base) {
    areaDoTriangulo = (base * ALTURA_TRIANGULO) / 2
}