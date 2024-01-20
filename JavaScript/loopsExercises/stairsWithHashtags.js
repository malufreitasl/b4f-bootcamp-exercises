function escadaComCardinais(n){
    for (let i = 1; i <= n; i++){
        console.log(" ".repeat(n-i) + "#".repeat(i))
    }
}

function escadaComCardinais2(n){
    for (let i = 1; i <= n; i++){
        console.log("#".repeat(n-i) + " ".repeat(i))
    }
}

escadaComCardinais(6)

escadaComCardinais2(6)