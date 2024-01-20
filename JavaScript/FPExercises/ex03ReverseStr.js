function inverteString(string){
    if (string === ""){
        return ""
    }
    return inverteString(string.slice(1)) + string[0]
}

function mapString(array){
    return array.map((e) => inverteString(e))
}

console.log(mapString(["hello"]))