function diaDaSemanaPorExtensoBilingue(data, lingua){
    // escreve aqui a função
    if (lingua === "en"){
        return data.toLocaleString("en-US", { weekday: "long" }).toLowerCase()
    }
    else{
        return data.toLocaleString("pt-PT", { weekday: "long" }).toLowerCase()
    }
} 

console.log(diaDaSemanaPorExtensoBilingue(new Date(2022,3,4), "en"))