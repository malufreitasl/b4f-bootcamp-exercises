function superficieDoCone(raio, altura){
    // escreve aqui a função
    const ladoInclinado = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
    const areaBase = Math.PI * Math.pow(raio, 2);
    const areaLateral = Math.PI * raio * ladoInclinado;
    return areaBase + areaLateral;
}