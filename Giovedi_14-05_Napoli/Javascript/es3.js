let globale = "visibile ovunque"

if(true) {

    let locale = "solo in questo scope";
    console.log(globale);
    console.log(locale);

}

console.log(locale) // errore

let a = 10;

console.log(b)
var b = 20
