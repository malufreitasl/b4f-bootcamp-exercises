function superficieDaPiramideQuadrada(ladodabase, altura){
    // escreve aqui a função
    const alturaTriangulo = Math.sqrt((ladodabase / 2) ** 2 + altura ** 2);
    return ladodabase ** 2 + 4 * ladodabase * alturaTriangulo / 2;

}