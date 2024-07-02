// variaveis
let anoCopa = 1930;
let anoLimite = prompt("Qual é o Ano Limite");

const mostra = function (frase) {
    document.write(frase + "<br>");
}

while (anoCopa <= anoLimite) {
    mostra(anoCopa + "Tem Copa!");
    //anoCopa = anoCopa + 4;
    anoCopa += 4;
}

mostra("ufa! Esses foram os aos da copa até" + anoLimite);
