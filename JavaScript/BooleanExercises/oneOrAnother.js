function umOuOutro(boolean1, boolean2, boolean3) {
    // escreve aqui a função
    return (
        (!boolean1 && !boolean2 && boolean3) ||
        (boolean1 && !boolean2 && !boolean3) ||
        (!boolean1 && boolean2 && !boolean3)
    )
}

console.log(
    umOuOutro(true, true, false),
    umOuOutro(false, true, false),
    umOuOutro(false, false, false),
    umOuOutro(true, true, true),
    umOuOutro(true, true, false),
    umOuOutro(true, false, false),
    umOuOutro(false, false, true)
)

