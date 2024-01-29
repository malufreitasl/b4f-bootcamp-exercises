function mesPorExtensoBilingue(data, lingua){
    // escreve aqui a função
    const MONTH = data.getMonth()
    const LANGUAGES = new Map([
        ["pt", ["Janeiro", "Fevereiro", "Março","Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]],
        ["en", ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"]]
    ])
    return LANGUAGES.get(lingua)[MONTH]
} 

console.log(mesPorExtensoBilingue(new Date(2022,2,1), "en"))