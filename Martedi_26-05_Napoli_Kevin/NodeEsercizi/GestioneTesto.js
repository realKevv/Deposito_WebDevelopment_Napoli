
function TestoMaiuscolo(testo) {
    return testo.toUpperCase();
}

function contaCaratteri(testo) {

    return testo.length;
}

function testoIncludes(testo, lettera) {

    return testo.toLowerCase().includes(lettera.toLowerCase());

}

module.exports = {
    TestoMaiuscolo,
    contaCaratteri,
    testoIncludes


}